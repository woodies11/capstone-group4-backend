/**
 * Created by Woods on 16/12/16.
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
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var MenuButton = (function () {
    function MenuButton() {
        /**
         * true for drawer open
         * @type {boolean}
         */
        this.isMenuExpanded = false;
        this.onClickEvent = new EventEmitter();
    }
    /**
     * emit true when turning into X (cross)
     */
    MenuButton.prototype.toggleState = function () {
        this.isMenuExpanded = !this.isMenuExpanded;
        this.onClickEvent.emit(this.isMenuExpanded);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MenuButton.prototype, "isMenuExpanded", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], MenuButton.prototype, "onClickEvent", void 0);
    MenuButton = __decorate([
        Component({
            selector: 'btn-menu',
            templateUrl: './btn-menu.html',
            styleUrls: ['./btn-menu.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuButton);
    return MenuButton;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/nav/btn-menu/btn-menu.component.js.map