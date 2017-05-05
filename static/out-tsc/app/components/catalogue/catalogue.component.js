var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
export var CatalogueComponent = (function () {
    function CatalogueComponent() {
        /**
         * The maximum number of items to show.
         * Note that each row will contain max of 5 items.
         * By default this is set to 10.
         * @type {number}
         */
        this.ITEM_LIMIT = 10;
        this.products = [];
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CatalogueComponent.prototype, "ITEM_LIMIT", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], CatalogueComponent.prototype, "products", void 0);
    CatalogueComponent = __decorate([
        Component({
            selector: 'catalogue-component',
            templateUrl: './catalogue.component.html',
            styleUrls: ['./catalogue.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CatalogueComponent);
    return CatalogueComponent;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app/components/catalogue/catalogue.component.js.map