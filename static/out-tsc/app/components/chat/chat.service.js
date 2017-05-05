/**
 * Created by Woods on 4/4/17.
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
import { UserService } from "../../services/user.service";
import { NetworkService } from "../../services/network.service";
/*
  TODO: make this a Promise
 */
export var ChatService = (function () {
    function ChatService(userService, networkService) {
        this.userService = userService;
        this.networkService = networkService;
    }
    ChatService.prototype.getConversationList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/ChatRooms/' + _this.userService.getCurrentUID(), function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    ChatService.prototype.getMessagesList = function (buyer_uid, seller_uid, iid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/ChatMessages', function (result) {
                resolve(JSON.parse(result)['result']);
            }, 'post', {
                buyer_uid: buyer_uid,
                seller_uid: seller_uid,
                iid: iid
            });
        });
    };
    ChatService.prototype.createChatRoom = function (bid, sid, iid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/CreateChatRoom', function (result) {
                resolve(JSON.parse(result)[result]);
            }, 'post', {
                bid: bid,
                sid: sid,
                iid: iid
            });
        });
    };
    ChatService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [UserService, NetworkService])
    ], ChatService);
    return ChatService;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/chat/chat.service.js.map