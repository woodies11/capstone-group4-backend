/**
 * Created by Woods on 28/4/17.
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
export var NetworkService = (function () {
    function NetworkService() {
    }
    NetworkService.prototype.makeAjax = function (path, callback, method, payload) {
        if (method === void 0) { method = 'get'; }
        if (payload === void 0) { payload = {}; }
        console.log('[Ajax] Call ' + path);
        var request = new XMLHttpRequest();
        request.onload = function () {
            console.log('[Ajax] Resolve ' + path);
            callback(this.responseText);
        };
        request.open(method, NetworkService.ROOT_URL + path, true);
        if (method === 'post') {
            request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            request.send(JSON.stringify(payload));
        }
        else {
            request.send();
        }
    };
    // TODO: how to make this a const?
    NetworkService.ROOT_URL = '';
    NetworkService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], NetworkService);
    return NetworkService;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/services/network.service.js.map