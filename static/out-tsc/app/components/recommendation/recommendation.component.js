/**
 * Created by Woods on 26/4/17.
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
import { UserService } from "../../services/user.service";
export var RecommendationComponent = (function () {
    // empty constructor to inject productService
    function RecommendationComponent(productService, userService) {
        this.productService = productService;
        this.userService = userService;
        this.products = [];
    }
    // FIXME: change this to query the real recommendations
    RecommendationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRecommendation(this.userService.getCurrentUID()).then(function (products) {
            _this.products = products;
        });
    };
    RecommendationComponent = __decorate([
        Component({
            selector: 'recommendation-box',
            template: "    \n    <div class=\"recommendation-box\">\n      \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33:\n      <catalogue-component [ITEM_LIMIT]=\"10\" [products]=\"products\"></catalogue-component>\n    </div>",
            styles: [
                "\n    .recommendation-box {\n      height: auto;\n      overflow: hidden;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [ProductService, UserService])
    ], RecommendationComponent);
    return RecommendationComponent;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/recommendation/recommendation.component.js.map