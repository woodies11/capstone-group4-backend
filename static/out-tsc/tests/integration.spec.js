var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { async, TestBed } from '@angular/core/testing';
import { Directive, Injectable, Input } from '@angular/core';
import { ProductService } from "../app/services/product.service";
import { UserService } from "../app/services/user.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { isUndefined } from "util";
import { RecommendationComponent } from "../app/components/recommendation/recommendation.component";
import { Product } from "../models/product.typing";
import { RatingStarComponet } from "../app/components/ratingstar/rating.star.component";
import { ProductDetailPage } from "../app/pages/product-detail/product-detail.page";
import { CatalogueComponent } from "../app/components/catalogue/catalogue.component";
describe(' ProductDetailPage ', function () {
    var comp;
    var fixture;
    var nativeElement;
    var productStub;
    var router;
    // configure our test environment before each test
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ProductDetailPage,
                RatingStarComponet,
                RecommendationComponent,
                CatalogueComponent
            ],
            imports: [
                RouterModule
            ],
            providers: [
                { provide: ProductService, useClass: ProductServiceStub },
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
                {
                    provide: UserService,
                    useClass: (function () {
                        function userServiceStub() {
                            this.getCurrentUID = function () {
                                return 'user';
                            };
                        }
                        userServiceStub.prototype.trackUserData = function () {
                            return;
                        };
                        return userServiceStub;
                    }()) }
            ]
        });
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductDetailPage);
        comp = fixture.componentInstance;
        nativeElement = fixture.nativeElement;
        _this.productStub = new Product();
        _this.productStub.iid = 'karma_iid';
        _this.productStub.name = 'karma_product';
        _this.productStub.description = 'this is a test product';
        _this.productStub.price = 192;
        _this.productStub.category = {
            cid: 'karma_cid',
            name: 'karma_test_category'
        };
        _this.productStub.seller = {
            sid: 'karma_sid',
            name: 'karma',
            rating: 4,
            rating_count: 99,
            contact: 'me',
        };
        _this.productStub.since = 847830746000;
        _this.productStub.location = {
            province: 'Victoria Island',
            city: 'Henesys'
        };
        _this.productStub.img_urls = [
            'https://ayumilovemaple.files.wordpress.com/2008/11/worldmap10-baseimg-0.png',
            'https://cdn.mmos.com/wp-content/gallery/maplestory-overview/MapleStory-Gameplay-4.jpg'
        ];
    });
    it("expect to render correctly after (async)", async(function () {
        // get our injected services
        var productService = fixture.debugElement.injector.get(ProductService);
        var activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
        // give it a stub Product
        productService.product = _this.productStub;
        // for the activatedRoutedStub to resolve its params
        activatedRoute.testParams = { iid: 'karma_test_iid' };
        // force page rendering
        fixture.detectChanges();
        // since getProduct is an async process (normally network call)
        // we need to wait until the async task is finish before proceeding
        fixture.whenStable().then(function () {
            // force page re-render
            fixture.detectChanges();
            // selectedProduct returned from the stub productService
            expect(isUndefined(comp.selectedProduct)).toBe(false);
            // test if the page is rendered correctly
            expect(nativeElement.querySelector('h3').textContent).toContain('karma_product');
            expect(isUndefined(nativeElement.querySelector('recommendation-box'))).toBe(false);
        });
    }));
});
var CatalogueStub = (function () {
    function CatalogueStub() {
        this.ITEM_LIMIT = 10;
        this.products = [];
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CatalogueStub.prototype, "ITEM_LIMIT", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], CatalogueStub.prototype, "products", void 0);
    CatalogueStub = __decorate([
        Directive({ selector: 'catalogue-component' }), 
        __metadata('design:paramtypes', [])
    ], CatalogueStub);
    return CatalogueStub;
}());
var ProductServiceStub = (function () {
    function ProductServiceStub() {
    }
    ProductServiceStub.prototype.getProduct = function (iid) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.product);
        });
    };
    ProductServiceStub.prototype.getRecommendation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve([_this.product]);
        });
    };
    return ProductServiceStub;
}());
var RouterStub = (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigateByUrl = function (url) { return url; };
    return RouterStub;
}());
var ActivatedRouteStub = (function () {
    function ActivatedRouteStub() {
        // ActivatedRoute.params is Observable
        this.subject = new BehaviorSubject(this.testParams);
        this.params = this.subject.asObservable();
        // Test parameters
        this._testParams = { iid: 'karma_params_iid' };
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "testParams", {
        get: function () { return this._testParams; },
        set: function (params) {
            this._testParams = params;
            this.subject.next(params);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "snapshot", {
        // ActivatedRoute.snapshot.params
        get: function () {
            return { params: this.testParams };
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteStub = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ActivatedRouteStub);
    return ActivatedRouteStub;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/tests/integration.spec.js.map