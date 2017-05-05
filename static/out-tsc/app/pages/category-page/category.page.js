/**
 * Created by Woods on 23/4/17.
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
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
export var CategoryPage = (function () {
    function CategoryPage(route, productService) {
        this.route = route;
        this.productService = productService;
        this.products = [];
        this.count = 0;
    }
    CategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.cid = params['cid'];
            _this.productService.getCategoryInfo(_this.cid).then(function (result) {
                _this.category = result;
            });
            _this.productService.getProductsForCid(_this.cid).then(function (result) {
                _this.products = result;
            });
            _this.productService.getProductCount(_this.cid).then(function (result) {
                _this.count = result['count'];
            });
        });
    };
    CategoryPage = __decorate([
        Component({
            selector: 'category-page',
            templateUrl: './category.page.html',
            styleUrls: ['./category.page.css'],
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, ProductService])
    ], CategoryPage);
    return CategoryPage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/pages/category-page/category.page.js.map