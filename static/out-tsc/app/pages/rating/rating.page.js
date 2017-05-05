/*
Created by Andy 6/4/2017
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
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
export var RatingPage = (function () {
    function RatingPage(route, productService, userService, router) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.product = null;
        this.feedback = '';
        this.rating = -1;
        this.rating_count = 0;
    }
    RatingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // (+) converts string 'iid' to a number
            _this.productService.getProduct(params['iid']).then(function (product) {
                _this.product = product;
                // once got the product detail, detailed query rating information
                _this.userService.getRatingDetail(product.seller.sid).then(function (result) {
                    _this.rating_count = result.count;
                });
            });
        });
    };
    RatingPage.prototype.ratingUpdate = function (rating) {
        this.rating = rating;
    };
    RatingPage.prototype.sendData = function () {
        var _this = this;
        if (this.rating < 0) {
            alert('Please give a rating!');
            return;
        }
        this.userService.submitFeedback({
            buyer_uid: this.userService.getCurrentUID(),
            seller_uid: this.product.seller.sid,
            comment: this.feedback,
            rating: this.rating,
            iid: this.product.iid
        }).then(function () {
            _this.router.navigate(['chat']);
        });
    };
    RatingPage = __decorate([
        Component({
            selector: 'rating-page',
            templateUrl: './rating.html',
            styleUrls: ['./rating.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, ProductService, UserService, Router])
    ], RatingPage);
    return RatingPage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/pages/rating/rating.page.js.map