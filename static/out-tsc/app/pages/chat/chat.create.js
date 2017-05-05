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
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { ChatService } from "../../components/chat/chat.service";
export var ChatCreate = (function () {
    function ChatCreate(route, userService, chatService, router) {
        this.route = route;
        this.userService = userService;
        this.chatService = chatService;
        this.router = router;
    }
    ChatCreate.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            -_this.chatService.createChatRoom(_this.userService.getCurrentUID(), params['sid'], params['iid']).then(function (result) {
                _this.router.navigate(['/chat', params['iid']]);
            });
        });
    };
    ChatCreate = __decorate([
        Component({
            selector: 'chat-create',
            template: '',
            providers: [ChatService]
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, UserService, ChatService, Router])
    ], ChatCreate);
    return ChatCreate;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/pages/chat/chat.create.js.map