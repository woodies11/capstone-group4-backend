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
import { Injectable } from "@angular/core";
import { NetworkService } from "./network.service";
export var UserService = (function () {
    function UserService(networkService) {
        this.networkService = networkService;
    }
    UserService.prototype.getCurrentUID = function () {
        return '123456789';
    };
    UserService.prototype.submitFeedback = function (feedback) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/SubmitFeedback', function (result) {
                resolve(result);
            }, 'post', feedback);
        });
    };
    UserService.prototype.getRatingDetail = function (sid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/Rating/' + sid, function (result) {
                var data = JSON.parse(result)['result'];
                resolve({
                    rating: data['avg_rating'],
                    count: data['count']
                });
            });
        });
    };
    UserService.prototype.trackUserData = function (cid) {
        this.networkService.makeAjax('/Track', function (result) {
        }, 'post', {
            cid: cid,
            uid: this.getCurrentUID()
        });
    };
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [NetworkService])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/services/user.service.js.map