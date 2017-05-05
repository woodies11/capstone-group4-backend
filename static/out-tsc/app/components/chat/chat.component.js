/**
 * Created by Woods and SaiRung on 27/3/17.
 *
 * This is a controller for the Chat UI
 * It handle how to display messages and also forward the
 * message to be sent to {{TBA}}.
 *
 * This class should only contain code relating to the
 * User Interface, any logic or network request should
 * be in the {{TBA}}.
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
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatService } from "./chat.service";
import { UserService } from "../../services/user.service";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { NetworkService } from "../../services/network.service";
export var ChatComponent = (function () {
    /*
       chatService is 'injected' by AngularJS 2.
       Avoid doing complex logic inside the constructor,
       use Angular's 'ngOnInit()' instead.
    */
    function ChatComponent(chatService, userService, productService, route) {
        this.chatService = chatService;
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        // TODO: find a way to keep these in sync with socket.io
        this.isMenuExpanded = false;
        // A model containing the information of the currently selected
        // conversation for HTML to display
        this.selectedConvo = null;
        this.selectedProduct = null;
        // A local list of conversation
        this.conversationList = null;
        // A local list of messages in the selected conversation
        // This is only to allow the HTML to render the messages.
        // We should prioritize network's version for data.
        this.messages = null;
        this.current_uid = '';
        this.rid = '';
    }
    // This function is ran at component's creation.
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current_uid = this.userService.getCurrentUID();
        this.socket = io.connect(NetworkService.ROOT_URL);
        // Request the chatService to fetch our list of conversation.
        // This may be from local cache or from the network, thus,
        // Make sure it is done in an async manner.
        this.chatService.getConversationList().then(function (result) {
            _this.conversationList = result;
            if (_this.conversationList != null && _this.conversationList.length > 0) {
                // show the top most conversation
                _this.showSelected(_this.conversationList[0]);
                // if iid exist in URL, search for that conversation and show it
                _this.route.params.subscribe(function (params) {
                    var iid = params['iid'];
                    if (iid != null) {
                        for (var _i = 0, _a = _this.conversationList; _i < _a.length; _i++) {
                            var convo = _a[_i];
                            if (convo.iid == iid) {
                                _this.showSelected(convo);
                            }
                        }
                    }
                });
            }
            //  socket io connect
            _this.socket.emit('connected', _this.current_uid);
            _this.socket.on('msg_receive', function (msg) {
                if (_this.rid != ChatComponent.roomId(msg)) {
                    return;
                }
                _this.messages.push(msg);
                _this.scrollToBottom();
            });
        });
        // Once fetched and received, show the top most conversation.
        this.scrollToBottom();
    };
    // Switch the selectedConvo to the new one so the browser can render,
    // then request the list of messages from network using chatService
    ChatComponent.prototype.showSelected = function (c) {
        var _this = this;
        this.selectedConvo = c;
        this.rid = ChatComponent.roomId(c);
        this.productService.getProduct(c.iid).then(function (result) {
            _this.selectedProduct = result;
        });
        this.chatService.getMessagesList(this.selectedConvo.buyer_uid, this.selectedConvo.seller_uid, this.selectedConvo.iid).then(function (result) {
            _this.messages = result;
        });
    };
    // TODO: let backend generate timestamp
    // FIXME: still a dummy, NO TWO WAY DATA SYNC between chatService yet.
    ChatComponent.prototype.sendMessage = function (msg) {
        if ((typeof msg !== 'undefined') && msg !== null && msg.length > 0) {
            var m = {
                buyer_uid: this.selectedConvo.buyer_uid,
                seller_uid: this.selectedConvo.seller_uid,
                iid: this.selectedConvo.iid,
                message: msg,
                timestamp: (new Date()).getTime(),
                sender: this.current_uid,
                flag: 0
            };
            this.chatMessageInput = null; // clear text field
            this.emitMessage(m);
        }
    };
    ChatComponent.prototype.toggleMenu = function () {
        this.isMenuExpanded = !this.isMenuExpanded;
    };
    ChatComponent.prototype.requestRating = function () {
        this.toggleMenu();
        var m = {
            buyer_uid: this.selectedConvo.buyer_uid,
            seller_uid: this.selectedConvo.seller_uid,
            iid: this.selectedConvo.iid,
            message: '',
            timestamp: (new Date()).getTime(),
            sender: this.current_uid,
            flag: 1
        };
        this.emitMessage(m);
    };
    ChatComponent.prototype.sendDeliveryForm = function () {
        this.toggleMenu();
        var m = {
            buyer_uid: this.selectedConvo.buyer_uid,
            seller_uid: this.selectedConvo.seller_uid,
            iid: this.selectedConvo.iid,
            message: '',
            timestamp: (new Date()).getTime(),
            sender: this.current_uid,
            flag: 2
        };
        this.emitMessage(m);
    };
    ChatComponent.prototype.emitMessage = function (msg) {
        this.socket.emit('message', msg);
    };
    ChatComponent.prototype.sendRating = function (rate) {
        console.log(rate);
    };
    ChatComponent.prototype.formClicked = function () {
        console.log('form clicked');
        window.location.href = 'https://goo.gl/forms/ri1kSaoO5vgs6I5g2';
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.roomId = function (chat_room) {
        return chat_room['buyer_uid'] + chat_room['seller_uid'] + chat_room['iid'];
    };
    __decorate([
        ViewChild('scrollMe'), 
        __metadata('design:type', ElementRef)
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        Component({
            selector: 'chat-component',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
            providers: [ChatService]
        }), 
        __metadata('design:paramtypes', [ChatService, UserService, ProductService, ActivatedRoute])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/chat/chat.component.js.map