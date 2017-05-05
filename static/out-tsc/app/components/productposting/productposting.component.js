/**
 * Created by Donya on 4/5/2017 AD.
 *
 * newProduct is the new item that the seller will sell
 *
 * the value of newProduct will change according to the input value of the user via
 * the use of ngModel which dynamically binds the value
 *
 * Destination of the detail of newProduct can be identified in the onSubmit function
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
import { Component } from "@angular/core";
import { Product } from '../../../models/product.typing';
import { ProductService } from "../../services/product.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
export var ProductPostingPage = (function () {
    function ProductPostingPage(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.selectedValue = null;
        this.newProduct = new Product();
        this.categories = null;
        this.services = null;
        this.provinces = null;
        this.cities = null;
        /**
         * An array containing all image URL data in Base64
         * !! Only use to show previews in the browser !!
         *
         * @type {Array}
         */
        this.imgDataURLs = [];
    }
    ProductPostingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.newProduct.seller.sid = this.userService.getCurrentUID();
        this.productService.getCategoryList().then(function (result) {
            _this.categories = result;
        });
        this.services = this.productService.getServiceList();
        this.provinces = this.productService.getProvinceList();
    };
    /**
     *  File browser will call this method upon returning.
     *  Thus, when the user selected a file or files.
     * @param input
     */
    ProductPostingPage.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    /**
     * Iterate through the list of files and extract the data
     * from each as Base64 string then store them into imgDataURLs
     * array which the HTML can then use as src of an <img>
     * @param files - the list of image files
     */
    ProductPostingPage.prototype.readFiles = function (files) {
        var _this = this;
        /**
         * Extract data from each file as URL Data Representation
         * And return to the callback an Event object
         *
         * The function is extract here so we can reuse the
         * FileReader object.
         */
        var readFile = function (file, reader, callback) {
            reader.onload = function (e) {
                callback(e);
            };
            reader.readAsDataURL(file);
        };
        // clear the array by setting length to 0
        // (this method is one of the best practice)
        this.imgDataURLs.length = 0;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            // FIXME: Potential Memory Leak!
            // -> Need to find a way to reuse the reader
            var reader = new FileReader();
            readFile(file, reader, function (e) {
                _this.imgDataURLs.push(e.target.result);
                _this.newProduct.img_urls = _this.imgDataURLs;
            });
        }
    };
    /**
     * This method is execute when the user submit the form.
     *
     * Currently, it only logs the user's input to the console.
     */
    ProductPostingPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newProduct);
        this.productService.postProduct(this.newProduct).then(function (result) {
            _this.router.navigate(['home']);
        });
    };
    Object.defineProperty(ProductPostingPage.prototype, "diagnostic", {
        /**
         * Only for debug, remove this when done
         */
        get: function () { return JSON.stringify(this.newProduct); },
        enumerable: true,
        configurable: true
    });
    ProductPostingPage = __decorate([
        Component({
            selector: 'prod-component',
            templateUrl: './productPosting.component.html',
            styleUrls: ['./productPosting.component.css'],
        }), 
        __metadata('design:paramtypes', [ProductService, UserService, Router])
    ], ProductPostingPage);
    return ProductPostingPage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/productposting/productposting.component.js.map