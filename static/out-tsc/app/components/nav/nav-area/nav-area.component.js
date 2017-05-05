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
import { Component } from '@angular/core';
import { Router } from "@angular/router";
export var NavArea = (function () {
    function NavArea(router) {
        this.router = router;
        this.isDrawerExpanded = false;
    }
    NavArea.prototype.toggleDrawer = function (shouldExpand) {
        this.isDrawerExpanded = shouldExpand;
    };
    NavArea.prototype.toContact = function () {
        this.router.navigate(['/contact']);
    };
    NavArea = __decorate([
        Component({
            selector: 'nav-area',
            templateUrl: './nav-area.html',
            styleUrls: ['./nav-area.css']
        }), 
        __metadata('design:paramtypes', [Router])
    ], NavArea);
    return NavArea;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/nav/nav-area/nav-area.component.js.map