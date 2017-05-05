/**
 * Created by Woods on 6/4/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Product } from "../../models/product.typing";
import { serviceList, selectableAddressList } from './productposting.dummy';
import { NetworkService } from "./network.service";
export var ProductService = (function () {
    function ProductService(networkService) {
        this.networkService = networkService;
        /**
         * This array is a cache for provinces list after reformatting it to contain
         * only the province part, mainly for the purpose of form options
         * @type {Array}
         */
        this.provincesList = [];
    }
    /**
     * A wrapper function for our dummy data loading
     * Will send and AJAX request which will read JSON data from our
     * Dummy JSON file and send the response back to the callback
     * @param callback
     */
    ProductService.prototype.load = function (callback) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            callback(this.responseText);
        };
        request.open("get", "/assets/dummies-data/products.json", true);
        request.send();
    };
    /* ------------------------------------------------------------------ *
     External APIs
     * ------------------------------------------------------------------ */
    /**
     * Get a product object for a specific product id (iid)
     * @param iid - product id (used to be item id so iid)
     * @returns {Promise<Product>}
     */
    ProductService.prototype.getProduct = function (iid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax("/Product/" + iid, function (result) {
                var json = JSON.parse(result);
                if (json['status'] != 200) {
                    resolve(null);
                }
                resolve(Product.parseProduct(json['result']));
            });
        });
    };
    /**
     * FIXME: nned change for production
     * For testing, this currently return 50 randomly selected product.
     *
     * Will wait for 1 second while the product parsing is done at init.
     * This is not a best practice, but this function will need to be
     * change entirely anyway, so that will do for now.
     *
     * @returns {Promise<Array<Product>>}
     */
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.load(function (result) {
                var products = [];
                for (var _i = 0, _a = JSON.parse(result); _i < _a.length; _i++) {
                    var p = _a[_i];
                    products.push(Product.parseProduct(p));
                }
                var temp = [];
                // generate a list of 50 random products
                for (var i = 0; i < 50; i++) {
                    var item = products[Math.floor(Math.random() * products.length)];
                    // use != not !== to check both null and undefined
                    // prevent pushing useless items
                    if (item != null)
                        temp.push(item);
                }
                resolve(temp);
            });
        });
    };
    ProductService.prototype.getRecommendation = function (uid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/GetRecommendation', function (result) {
                var tmp = [];
                for (var _i = 0, _a = JSON.parse(result)['result']; _i < _a.length; _i++) {
                    var p = _a[_i];
                    tmp.push(Product.parseProduct(p));
                }
                resolve(tmp);
            }, 'post', {
                uid: uid
            });
        });
    };
    /**
     * Return (in callback) a list of products within a given categories
     * @param cid
     */
    ProductService.prototype.getProductsForCid = function (cid, limit, start) {
        var _this = this;
        if (limit === void 0) { limit = 50; }
        if (start === void 0) { start = 0; }
        return new Promise(function (resolve) {
            _this.networkService.makeAjax("/ProductForCategory/" + cid, function (result) {
                var products = JSON.parse(result);
                var tmp = [];
                for (var _i = 0, _a = products['result']; _i < _a.length; _i++) {
                    var product = _a[_i];
                    tmp.push(Product.parseProduct(product));
                }
                resolve(tmp);
            });
        });
    };
    /**
     * Return a list of categories, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getCategoryList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/Categories', function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    /**
     * Return a list of services, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getServiceList = function () {
        return serviceList;
    };
    /**
     * Return a list of provinces, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getProvinceList = function () {
        if (this.provincesList.length <= 0) {
            for (var _i = 0, selectableAddressList_1 = selectableAddressList; _i < selectableAddressList_1.length; _i++) {
                var province_cities = selectableAddressList_1[_i];
                this.provincesList.push(province_cities.province);
            }
        }
        return this.provincesList;
    };
    /**
     * Return a list of cities selectable within that province,
     * used mainly for displaying form options in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getCityList = function (province) {
        for (var _i = 0, selectableAddressList_2 = selectableAddressList; _i < selectableAddressList_2.length; _i++) {
            var province_cities = selectableAddressList_2[_i];
            if (province_cities.province === province) {
                return province_cities.cities;
            }
        }
        return [];
    };
    ProductService.prototype.getCategoryInfo = function (cid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/CategoryInfo/' + cid, function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    ProductService.prototype.getProductCount = function (cid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/ProductCount/' + cid, function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    ProductService.prototype.postProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/PostProduct', function (result) {
                resolve(result);
            }, 'post', product);
        });
    };
    ProductService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [NetworkService])
    ], ProductService);
    return ProductService;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/services/product.service.js.map