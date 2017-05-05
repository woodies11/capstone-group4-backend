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
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';
export var ProductDetailPage = (function () {
    function ProductDetailPage(route, productService, userService, router) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.current_uid = "";
    }
    ProductDetailPage.prototype.selectImg = function (img) {
        this.selectedImage = img;
    };
    ProductDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.current_uid = this.userService.getCurrentUID();
        this.route.params.subscribe(function (params) {
            _this.productService.getProduct(params['iid']).then(function (product) {
                _this.selectedProduct = product;
                if (_this.selectedProduct != null) {
                    _this.selectImg(_this.selectedProduct.img_urls[0]);
                    _this.userService.trackUserData(_this.selectedProduct.category.cid);
                }
            });
        });
    };
    ProductDetailPage.prototype.toChatRoom = function () {
        this.router.navigate(['/chat-create', this.selectedProduct.seller.sid, this.selectedProduct.iid]);
    };
    ProductDetailPage = __decorate([
        Component({
            selector: 'product-detail-page',
            templateUrl: 'product-detail.page.html',
            styleUrls: ['product-detail.page.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, ProductService, UserService, Router])
    ], ProductDetailPage);
    return ProductDetailPage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/pages/product-detail/product-detail.page.js.map