/**
 * Created by Woods on 27/4/17.
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
import { Component, EventEmitter, Input, Output } from "@angular/core";
export var RatingStarComponet = (function () {
    function RatingStarComponet() {
        this._rate = -1;
        this.boolean = false;
        this.ratingEmitter = new EventEmitter();
    }
    Object.defineProperty(RatingStarComponet.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        // Make sure this is a round number,
        // otherwise we cannot find the star we want
        // to highlight
        set: function (rate) {
            this._rate = Math.round(rate);
        },
        enumerable: true,
        configurable: true
    });
    RatingStarComponet.prototype.starClicked = function (n) {
        if (!this.active)
            return;
        this.rate = n;
        this.ratingEmitter.emit(this.rate);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], RatingStarComponet.prototype, "rate", null);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RatingStarComponet.prototype, "active", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], RatingStarComponet.prototype, "ratingEmitter", void 0);
    RatingStarComponet = __decorate([
        Component({
            selector: 'rating-star',
            templateUrl: 'rating.star.html',
            styleUrls: ['rating.star.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RatingStarComponet);
    return RatingStarComponet;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/ratingstar/rating.star.component.js.map