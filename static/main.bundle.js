webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
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

var NetworkService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NetworkService);
    return NetworkService;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/network.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
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



/*
  TODO: make this a Promise
 */
var ChatService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */]) === 'function' && _b) || Object])
    ], ChatService);
    return ChatService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/chat.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/**
 * Created by Woods on 23/4/17.
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


var CategoriesPage = (function () {
    function CategoriesPage(productService) {
        this.productService = productService;
        this.categories = [];
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCategoryList().then(function (result) {
            _this.categories = result;
        });
    };
    CategoriesPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'categories-page',
            template: __webpack_require__(743),
            styles: [__webpack_require__(724)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], CategoriesPage);
    return CategoriesPage;
    var _a;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/categories.page.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/**
 * Created by Woods on 23/4/17.
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



var CategoryPage = (function () {
    function CategoryPage(route, productService) {
        this.route = route;
        this.productService = productService;
        this.products = [];
        this.count = 0;
    }
    CategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.cid = params['cid'];
            _this.productService.getCategoryInfo(_this.cid).then(function (result) {
                _this.category = result;
            });
            _this.productService.getProductsForCid(_this.cid).then(function (result) {
                _this.products = result;
            });
            _this.productService.getProductCount(_this.cid).then(function (result) {
                _this.count = result['count'];
            });
        });
    };
    CategoryPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'category-page',
            template: __webpack_require__(744),
            styles: [__webpack_require__(725)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _b) || Object])
    ], CategoryPage);
    return CategoryPage;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/category.page.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_service__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatCreate; });
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




var ChatCreate = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'chat-create',
            template: '',
            providers: [__WEBPACK_IMPORTED_MODULE_3__components_chat_chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__components_chat_chat_service__["a" /* ChatService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ChatCreate);
    return ChatCreate;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/chat.create.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPage = (function () {
    function ChatPage() {
    }
    ChatPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'chat-page',
            template: __webpack_require__(745),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatPage);
    return ChatPage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/chat.page.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = (function () {
    function HomePage() {
        this.titleArray = [
            { name: "abc" },
            { name: "cdsa" },
            { name: "cdsa2" }
        ];
    }
    HomePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__(746),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/home.page.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/**
 * Created by Woods on 6/4/17.
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





var ProductDetailPage = (function () {
    function ProductDetailPage(route, productService, userService, router) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.current_uid = "";
    }
    ProductDetailPage.prototype.selectImg = function (img) {
        this.selectedImage = img;
    };
    ProductDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.current_uid = this.userService.getCurrentUID();
        this.route.params.subscribe(function (params) {
            _this.productService.getProduct(params['iid']).then(function (product) {
                _this.selectedProduct = product;
                if (_this.selectedProduct != null) {
                    _this.selectImg(_this.selectedProduct.img_urls[0]);
                    _this.userService.trackUserData(_this.selectedProduct.category.cid);
                }
            });
        });
    };
    ProductDetailPage.prototype.toChatRoom = function () {
        this.router.navigate(['/chat-create', this.selectedProduct.seller.sid, this.selectedProduct.iid]);
    };
    ProductDetailPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'product-detail-page',
            template: __webpack_require__(747),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ProductDetailPage);
    return ProductDetailPage;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/product-detail.page.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPosting; });
/**
 * Created by Donya on 4/5/2017 AD.
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

var ProductPosting = (function () {
    function ProductPosting() {
    }
    ProductPosting = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'prod-page',
            template: '<prod-component></prod-component>',
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductPosting);
    return ProductPosting;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/productposting.page.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/*
Created by Andy 6/4/2017
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




var RatingPage = (function () {
    function RatingPage(route, productService, userService, router) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.product = null;
        this.feedback = '';
        this.rating = -1;
        this.rating_count = 0;
    }
    RatingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // (+) converts string 'iid' to a number
            _this.productService.getProduct(params['iid']).then(function (product) {
                _this.product = product;
                // once got the product detail, detailed query rating information
                _this.userService.getRatingDetail(product.seller.sid).then(function (result) {
                    _this.rating_count = result.count;
                });
            });
        });
    };
    RatingPage.prototype.ratingUpdate = function (rating) {
        this.rating = rating;
    };
    RatingPage.prototype.sendData = function () {
        var _this = this;
        if (this.rating < 0) {
            alert('Please give a rating!');
            return;
        }
        this.userService.submitFeedback({
            buyer_uid: this.userService.getCurrentUID(),
            seller_uid: this.product.seller.sid,
            comment: this.feedback,
            rating: this.rating,
            iid: this.product.iid
        }).then(function () {
            _this.router.navigate(['chat']);
        });
    };
    RatingPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'rating-page',
            template: __webpack_require__(748),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RatingPage);
    return RatingPage;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/rating.page.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/**
 * Created by Donya on 4/8/2017 AD.
 *
 * A file to specify variable types :)
 */
var Product = (function () {
    function Product(iid, name, description, price, category, location, since, seller, _img_urls, delivery_options) {
        if (category === void 0) { category = {
            cid: '',
            name: ''
        }; }
        if (location === void 0) { location = {
            province: '',
            city: '',
        }; }
        if (seller === void 0) { seller = {
            name: '',
            sid: '',
            rating: -1,
            rating_count: 0,
            contact: '',
        }; }
        if (_img_urls === void 0) { _img_urls = []; }
        if (delivery_options === void 0) { delivery_options = []; }
        this.iid = iid;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.location = location;
        this.since = since;
        this.seller = seller;
        this._img_urls = _img_urls;
        this.delivery_options = delivery_options;
    }
    Object.defineProperty(Product.prototype, "img_urls", {
        get: function () {
            return this._img_urls;
        },
        set: function (value) {
            this._img_urls = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a TypeScript Product Object from a JSON object
     * @param jObj - the parsed JavaScript Object form
     * of our product model (actual object, not string)
     * @returns {Product}
     */
    Product.parseProduct = function (jObj) {
        var product = new Product();
        // populate primitive values
        product.iid = jObj['iid'];
        product.name = jObj['name'];
        product.description = jObj['description'];
        product.price = jObj['price'];
        product.since = jObj['since'];
        // different color due to being a setter
        product.img_urls = jObj['url'];
        // Category type
        product.category = {
            cid: jObj['cid'],
            name: jObj['cname']
        };
        // extract the location data and map it according to
        // ProductLocation type {province: string, city: string}
        product.location = {
            province: jObj['province'],
            city: jObj['city']
        };
        // extract the seller data and map it according to
        // SellerDetail type
        product.seller = {
            name: jObj['first_name'] + " " + jObj['last_name'],
            sid: jObj['seller_uid'],
            rating: jObj['rating'],
            rating_count: jObj['rating_count'],
            contact: jObj['phone']
        };
        // FIXME: We don't currently have any option in the dummies
        product.delivery_options = [];
        return product;
    };
    return Product;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/product.typing.js.map

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 419;


/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(539);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(735),
            styles: [__webpack_require__(716)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chat_chat_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat_page__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_page__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rating_rating_page__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nav_nav_area_nav_area_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_productposting_productposting_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_productPosting_productposting_page__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_catalogue_catalogue_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_product_detail_product_detail_page__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categories_page_categories_page__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_category_page_category_page__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_recommendation_recommendation_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ratingstar_rating_star_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat_create__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_network_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























/**
 *  App Module is the module containing the entire app.
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            /**
             *  Any export classes that we want to use in our app
             *  we need to add it to the `declarations: [...]` array
             */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_catalogue_catalogue_component__["a" /* CatalogueComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat_page__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rating_rating_page__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_productposting_productposting_component__["a" /* ProductPostingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_productPosting_productposting_page__["a" /* ProductPosting */],
                __WEBPACK_IMPORTED_MODULE_14__pages_product_detail_product_detail_page__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categories_page_categories_page__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_category_page_category_page__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_recommendation_recommendation_component__["a" /* RecommendationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_ratingstar_rating_star_component__["a" /* RatingStarComponet */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat_create__["a" /* ChatCreate */]
            ],
            /**
             *  `imports: [...]` is for MODULES.
             *  Add to this list any module we want to use.
             *
             *  Note that APP_ROUTES is in fact a module that we set up
             */
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_nav_nav_area_nav_area_module__["a" /* NavAreaModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* APP_ROUTES */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_22__services_network_service__["a" /* NetworkService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat_page__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat_create__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_rating_rating_page__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productPosting_productposting_page__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_detail_product_detail_page__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_page_categories_page__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_page_category_page__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/**
 * Created by Woods on 18/12/16.
 *
 * This file contain all the routing rules for this app.
 * Modify entries in `appRoutes` to change the rules.
 */









/**
 * Contain all the routing rules of this app.
 * Routing rules tell the app what to do or which component
 * to show, base on the parameter after the "www.PAGE_URL.com/"
 *
 * Note that `useHash` is set to true for compatibility.
 * This will simply add a '#' before the parameter when redirect
 */
var appRoutes = [
    {
        // redirect default (empty) link to the home page
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_page__["a" /* HomePage */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat_page__["a" /* ChatPage */]
    },
    {
        path: 'chat/:iid',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat_page__["a" /* ChatPage */]
    },
    {
        path: 'rating/:iid',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_rating_rating_page__["a" /* RatingPage */]
    },
    {
        path: 'product/:iid',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_product_detail_product_detail_page__["a" /* ProductDetailPage */]
    },
    {
        path: 'prod-post',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_productPosting_productposting_page__["a" /* ProductPosting */]
    },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_categories_page_categories_page__["a" /* CategoriesPage */]
    },
    {
        path: 'category/:cid',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_category_page_category_page__["a" /* CategoryPage */]
    },
    {
        path: 'chat-create/:sid/:iid',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat_create__["a" /* ChatCreate */]
    }
];
var APP_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/app.routing.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogueComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], CatalogueComponent.prototype, "ITEM_LIMIT", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], CatalogueComponent.prototype, "products", void 0);
    CatalogueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'catalogue-component',
            template: __webpack_require__(736),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], CatalogueComponent);
    return CatalogueComponent;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/catalogue.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_network_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
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







var ChatComponent = (function () {
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
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](__WEBPACK_IMPORTED_MODULE_6__services_network_service__["a" /* NetworkService */].ROOT_URL);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === 'function' && _a) || Object)
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'chat-component',
            template: __webpack_require__(737),
            styles: [__webpack_require__(718)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/chat.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuButton; });
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

var MenuButton = (function () {
    function MenuButton() {
        /**
         * true for drawer open
         * @type {boolean}
         */
        this.isMenuExpanded = false;
        this.onClickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    /**
     * emit true when turning into X (cross)
     */
    MenuButton.prototype.toggleState = function () {
        this.isMenuExpanded = !this.isMenuExpanded;
        this.onClickEvent.emit(this.isMenuExpanded);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], MenuButton.prototype, "isMenuExpanded", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], MenuButton.prototype, "onClickEvent", void 0);
    MenuButton = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'btn-menu',
            template: __webpack_require__(738),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuButton);
    return MenuButton;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/btn-menu.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavArea; });
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


var NavArea = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'nav-area',
            template: __webpack_require__(739),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], NavArea);
    return NavArea;
    var _a;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/nav-area.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__btn_menu_btn_menu_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_area_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_drawer_nav_drawer__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavAreaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavAreaModule = (function () {
    function NavAreaModule() {
    }
    NavAreaModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__nav_area_component__["a" /* NavArea */], __WEBPACK_IMPORTED_MODULE_1__btn_menu_btn_menu_component__["a" /* MenuButton */], __WEBPACK_IMPORTED_MODULE_4__nav_drawer_nav_drawer__["a" /* NavDrawer */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__nav_area_component__["a" /* NavArea */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NavAreaModule);
    return NavAreaModule;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/nav-area.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavDrawer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDrawer = (function () {
    function NavDrawer() {
        this.isExpanded = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], NavDrawer.prototype, "isExpanded", void 0);
    NavDrawer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'nav-drawer',
            template: __webpack_require__(740),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavDrawer);
    return NavDrawer;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/nav-drawer.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_typing__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPostingPage; });
/**
 * Created by Donya on 4/5/2017 AD.
 *
 * newProduct is the new item that the seller will sell
 *
 * the value of newProduct will change according to the input value of the user via
 * the use of ngModel which dynamically binds the value
 *
 * Destination of the detail of newProduct can be identified in the onSubmit function
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





var ProductPostingPage = (function () {
    function ProductPostingPage(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.selectedValue = null;
        this.newProduct = new __WEBPACK_IMPORTED_MODULE_1__models_product_typing__["a" /* Product */]();
        this.categories = null;
        this.services = null;
        this.provinces = null;
        this.cities = null;
        /**
         * An array containing all image URL data in Base64
         * !! Only use to show previews in the browser !!
         *
         * @type {Array}
         */
        this.imgDataURLs = [];
    }
    ProductPostingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.newProduct.seller.sid = this.userService.getCurrentUID();
        this.productService.getCategoryList().then(function (result) {
            _this.categories = result;
        });
        this.services = this.productService.getServiceList();
        this.provinces = this.productService.getProvinceList();
    };
    /**
     *  File browser will call this method upon returning.
     *  Thus, when the user selected a file or files.
     * @param input
     */
    ProductPostingPage.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    /**
     * Iterate through the list of files and extract the data
     * from each as Base64 string then store them into imgDataURLs
     * array which the HTML can then use as src of an <img>
     * @param files - the list of image files
     */
    ProductPostingPage.prototype.readFiles = function (files) {
        var _this = this;
        /**
         * Extract data from each file as URL Data Representation
         * And return to the callback an Event object
         *
         * The function is extract here so we can reuse the
         * FileReader object.
         */
        var readFile = function (file, reader, callback) {
            reader.onload = function (e) {
                callback(e);
            };
            reader.readAsDataURL(file);
        };
        // clear the array by setting length to 0
        // (this method is one of the best practice)
        this.imgDataURLs.length = 0;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            // FIXME: Potential Memory Leak!
            // -> Need to find a way to reuse the reader
            var reader = new FileReader();
            readFile(file, reader, function (e) {
                _this.imgDataURLs.push(e.target.result);
                _this.newProduct.img_urls = _this.imgDataURLs;
            });
        }
    };
    /**
     * This method is execute when the user submit the form.
     *
     * Currently, it only logs the user's input to the console.
     */
    ProductPostingPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newProduct);
        this.productService.postProduct(this.newProduct).then(function (result) {
            _this.router.navigate(['home']);
        });
    };
    Object.defineProperty(ProductPostingPage.prototype, "diagnostic", {
        /**
         * Only for debug, remove this when done
         */
        get: function () { return JSON.stringify(this.newProduct); },
        enumerable: true,
        configurable: true
    });
    ProductPostingPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'prod-component',
            template: __webpack_require__(741),
            styles: [__webpack_require__(722)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ProductPostingPage);
    return ProductPostingPage;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/productposting.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingStarComponet; });
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

var RatingStarComponet = (function () {
    function RatingStarComponet() {
        this._rate = -1;
        this.boolean = false;
        this.ratingEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Number)
    ], RatingStarComponet.prototype, "rate", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], RatingStarComponet.prototype, "active", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], RatingStarComponet.prototype, "ratingEmitter", void 0);
    RatingStarComponet = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'rating-star',
            template: __webpack_require__(742),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingStarComponet);
    return RatingStarComponet;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/rating.star.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationComponent; });
/**
 * Created by Woods on 26/4/17.
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



var RecommendationComponent = (function () {
    // empty constructor to inject productService
    function RecommendationComponent(productService, userService) {
        this.productService = productService;
        this.userService = userService;
        this.products = [];
    }
    // FIXME: change this to query the real recommendations
    RecommendationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRecommendation(this.userService.getCurrentUID()).then(function (products) {
            _this.products = products;
        });
    };
    RecommendationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'recommendation-box',
            template: "    \n    <div class=\"recommendation-box\">\n      \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33:\n      <catalogue-component [ITEM_LIMIT]=\"10\" [products]=\"products\"></catalogue-component>\n    </div>",
            styles: [
                "\n    .recommendation-box {\n      height: auto;\n      overflow: hidden;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], RecommendationComponent);
    return RecommendationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/recommendation.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export categoryList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectableAddressList; });
/**
 * Created by Donya on 4/5/2017 AD.
 */
var categoryList = [
    { cid: "001", name: "บ้าน" },
    { cid: "002", name: "พระเครื่อง" },
    { cid: "003", name: "หนังสือ" }
];
var serviceList = [
    { sid: "1", name: "Kerry Express" },
    { sid: "2", name: "Line Man" },
    { sid: "3", name: "DHL" }
];
var selectableAddressList = [
    { province: "กรุงเทพ", cities: [
            "a",
            "b",
            "c"
        ] },
    { province: "ปทุมธานี", cities: [
            "d",
            "e",
            "f"
        ] },
    { province: "จันทบุรี", cities: [
            "g",
            "h",
            "i"
        ] },
    { province: "เชียงใหม่", cities: [
            "j",
            "k",
            "l"
        ] }
];
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/productposting.dummy.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/environment.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_typing__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productposting_dummy__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/**
 * Created by Woods on 6/4/17.
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




var ProductService = (function () {
    function ProductService(networkService) {
        this.networkService = networkService;
        /**
         * This array is a cache for provinces list after reformatting it to contain
         * only the province part, mainly for the purpose of form options
         * @type {Array}
         */
        this.provincesList = [];
    }
    /**
     * A wrapper function for our dummy data loading
     * Will send and AJAX request which will read JSON data from our
     * Dummy JSON file and send the response back to the callback
     * @param callback
     */
    ProductService.prototype.load = function (callback) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            callback(this.responseText);
        };
        request.open("get", "/assets/dummies-data/products.json", true);
        request.send();
    };
    /* ------------------------------------------------------------------ *
     External APIs
     * ------------------------------------------------------------------ */
    /**
     * Get a product object for a specific product id (iid)
     * @param iid - product id (used to be item id so iid)
     * @returns {Promise<Product>}
     */
    ProductService.prototype.getProduct = function (iid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax("/Product/" + iid, function (result) {
                var json = JSON.parse(result);
                if (json['status'] != 200) {
                    resolve(null);
                }
                resolve(__WEBPACK_IMPORTED_MODULE_1__models_product_typing__["a" /* Product */].parseProduct(json['result']));
            });
        });
    };
    /**
     * FIXME: nned change for production
     * For testing, this currently return 50 randomly selected product.
     *
     * Will wait for 1 second while the product parsing is done at init.
     * This is not a best practice, but this function will need to be
     * change entirely anyway, so that will do for now.
     *
     * @returns {Promise<Array<Product>>}
     */
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.load(function (result) {
                var products = [];
                for (var _i = 0, _a = JSON.parse(result); _i < _a.length; _i++) {
                    var p = _a[_i];
                    products.push(__WEBPACK_IMPORTED_MODULE_1__models_product_typing__["a" /* Product */].parseProduct(p));
                }
                var temp = [];
                // generate a list of 50 random products
                for (var i = 0; i < 50; i++) {
                    var item = products[Math.floor(Math.random() * products.length)];
                    // use != not !== to check both null and undefined
                    // prevent pushing useless items
                    if (item != null)
                        temp.push(item);
                }
                resolve(temp);
            });
        });
    };
    ProductService.prototype.getRecommendation = function (uid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/GetRecommendation', function (result) {
                var tmp = [];
                for (var _i = 0, _a = JSON.parse(result)['result']; _i < _a.length; _i++) {
                    var p = _a[_i];
                    tmp.push(__WEBPACK_IMPORTED_MODULE_1__models_product_typing__["a" /* Product */].parseProduct(p));
                }
                resolve(tmp);
            }, 'post', {
                uid: uid
            });
        });
    };
    /**
     * Return (in callback) a list of products within a given categories
     * @param cid
     */
    ProductService.prototype.getProductsForCid = function (cid, limit, start) {
        var _this = this;
        if (limit === void 0) { limit = 50; }
        if (start === void 0) { start = 0; }
        return new Promise(function (resolve) {
            _this.networkService.makeAjax("/ProductForCategory/" + cid, function (result) {
                var products = JSON.parse(result);
                var tmp = [];
                for (var _i = 0, _a = products['result']; _i < _a.length; _i++) {
                    var product = _a[_i];
                    tmp.push(__WEBPACK_IMPORTED_MODULE_1__models_product_typing__["a" /* Product */].parseProduct(product));
                }
                resolve(tmp);
            });
        });
    };
    /**
     * Return a list of categories, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getCategoryList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/Categories', function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    /**
     * Return a list of services, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getServiceList = function () {
        return __WEBPACK_IMPORTED_MODULE_2__productposting_dummy__["a" /* serviceList */];
    };
    /**
     * Return a list of provinces, used mainly for displaying form options
     * in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getProvinceList = function () {
        if (this.provincesList.length <= 0) {
            for (var _i = 0, selectableAddressList_1 = __WEBPACK_IMPORTED_MODULE_2__productposting_dummy__["b" /* selectableAddressList */]; _i < selectableAddressList_1.length; _i++) {
                var province_cities = selectableAddressList_1[_i];
                this.provincesList.push(province_cities.province);
            }
        }
        return this.provincesList;
    };
    /**
     * Return a list of cities selectable within that province,
     * used mainly for displaying form options in the ProductPosting page
     * @returns {Array<Category>}
     */
    ProductService.prototype.getCityList = function (province) {
        for (var _i = 0, selectableAddressList_2 = __WEBPACK_IMPORTED_MODULE_2__productposting_dummy__["b" /* selectableAddressList */]; _i < selectableAddressList_2.length; _i++) {
            var province_cities = selectableAddressList_2[_i];
            if (province_cities.province === province) {
                return province_cities.cities;
            }
        }
        return [];
    };
    ProductService.prototype.getCategoryInfo = function (cid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/CategoryInfo/' + cid, function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    ProductService.prototype.getProductCount = function (cid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/ProductCount/' + cid, function (result) {
                resolve(JSON.parse(result)['result']);
            });
        });
    };
    ProductService.prototype.postProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.networkService.makeAjax('/PostProduct', function (result) {
                resolve(result);
            }, 'post', product);
        });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__network_service__["a" /* NetworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__network_service__["a" /* NetworkService */]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/product.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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


var UserService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/user.service.js.map

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#router-outlet {\n  z-index: 0;\n}\n\n#nav-area {\n  z-index: 10;\n}\n\n.main-component {\n  max-width: 1080px;\n  margin: 0 auto;\n  /*border: 1px solid gray;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".catalogue-box {\n  width: 100%;\n  height: 100%;\n}\n\n.catalogue-box ul {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.catalogue-box li {\n  list-style-type: none;\n  width: calc(100%/5);\n  display: inline-block;\n  padding: 1em;\n  cursor: pointer;\n}\n\n.catalogue-box li:hover .product-image {\n  box-shadow: 2px 2px 23px -1px rgba(0,0,0,0.15);\n}\n\n.product-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #b5b5b5;\n  width: 100%;\n  padding-top: 80%;\n}\n\n.product-detail {\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.product-detail .my-row{\n  display: block;\n}\n\n.product-detail .left, .product-detail .right {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.product-detail .rating {\n  width: 70%;\n}\n\n.product-detail .seller-name {\n  font-size: 0.8em;\n}\n\n.product-detail .location {\n  color: var(--warm-grey);\n  font-size: 0.8em;\n\n}\n\n.inline {\n  display: inline;\n}\n\n.no-wrap {\n  text-wrap: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 1080px) {\n  .product-detail .my-row{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .product-detail .left {\n    width: 60%;\n    display: inline-block;\n  }\n  .product-detail .right {\n    width: 40%;\n    display: inline-block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "/**\n * Created by Woods and SaiRung on 27/3/17.\n */\n\n#chat-app {\n  padding: 0;\n  height: 100%;\n}\n\n#seller-profile {\n}\n\n#item-detail {\n}\n\n.top-section-block {\n  float: left;\n  height: 100%;\n  width: 100%;\n  display: block;\n  background: var(--white);\n  border-top: 1px solid #d5d5d5;\n}\n\n#seller-info {\n  width: 30%;\n  height: 100%;\n  float: left;\n  padding-top: 4px;\n  text-align: center;\n}\n\n#chat-left-side {\n  float: left;\n  width: 35%;\n  height: 100%;\n  overflow: scroll;\n  background: #F2F2F2;\n}\n\n#chat-right-side {\n  float: left;\n  width: 65%;\n  position: relative;\n}\n\n\n#chat-box {\n  width: 100%;\n  min-height: 450px;\n  height: calc(100% - 130px);\n  height: -moz-calc(100% - 130px);\n  background: #F2F2F2;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.chat-top-section {\n  height: 70px;\n  background: var(--white);\n  border-bottom: solid 1px #e8e8e8;\n}\n\n.rounded-img {\n  border-radius: 50%;\n}\n\n#profile-img {\n  width: 50px;\n  height: 50px;\n  margin: 7px 7px;\n  float: left;\n}\n\n\n\n#star-rating {\n  height: 25px;\n  width: 100%;\n}\n\n.btn-rect {\n  width: 70px;\n  border-radius: 2px;\n  border-style: none;\n  font-family: Thonburi;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.center-horizontal {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.left-padding {\n  padding-left: 5px;\n}\n\n.product-image {\n  float: right;\n  height: 60px;\n  width: 60px;\n  margin: 5px 5px;\n  background: red;\n  overflow: inherit;\n}\n/*\nFill product image\n*/\n.product-image img {\n  max-width: 100%;\n  max-height: 100%;\n  height: 60px;\n  width: 60px;\n}\n\n\n.right-border {\n  border-right: solid 1px #d5d5d5;\n}\n\n.float-right {\n  float: right;\n}\n\n.seller-buttons {\n  margin: 20px 10px;\n}\n\n.bottom-bar-container {\n  width: 100%;\n  height: 60px;\n  background: var(--white);\n  position: absolute;\n  bottom: 0;\n}\n\n.bottom-bar {\n  position: relative;\n  height: 100%;\n}\n\n/* FIXME: May overlapped  with top section when resize */\n#message-box {\n  margin: 0 10px;\n  width: 70%; /* fall back */\n  width: calc(100% - 200px);\n  width: -webkit-calc(100% - 200px);\n}\n\n.chat-conversation{\n  width: 100%;\n  height: 100px;\n  background-color: white;\n  border: solid 1px #e8e8e8;\n  cursor: pointer;\n}\n\n.prof-pic{\n  width : 31%;\n  height: 100%;\n  float:left;\n}\n.chat-info{\n  width:69%;\n  height: 100%;\n  margin-left: 31%;\n  overflow: hidden;\n}\n\n/*Test profile pic*/\n.prof-circle{\n  border-radius: 50%;\n  width:45px;\n  height: 45px;\n  display: table-cell;\n  vertical-align: middle;\n  background: #f5f5f5;\n  margin-top: 30%;\n  margin-left: 30%;\n  visibility: hidden;\n}\n\n.cinfo{\n  margin-top: 10%;\n  margin-left: 4%;\n}\n\n#chatter{\n  color: dodgerblue;\n  font-size: large;\n}\n\n#messages{\n  color:gray;\n  text-wrap: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 2em;\n}\n\n#time{\n  color:gray;\n  line-height: 65%;\n  font-size: 6.5pt;\n}\n\n#btn-menu {\n  width: 70px;\n}\n\n#btn-send {\n  width: 70px;\n}\n\n.chat-conversation.selected{\n  background-color: var(--iris);\n}\n\n.chat-conversation.selected #chatter,\n.chat-conversation.selected #messages,\n.chat-conversation.selected #time {\n  color: white;\n}\n\n/* >Tablet */\n@media only screen and (min-width: 768px) {\n  .top-section-block {\n    width: 50%;\n    display: inline-block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .prof-circle {\n    visibility: visible;\n  }\n}\n\n/* ------------- chat bubbles -------------*/\n\n#chat-box ul {\n  padding: 2em;\n  list-style-type: none;\n}\n\n#chat-box li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#chat-box .wrapper {\n  width: 100%;\n}\n\n#chat-box .sent {\n  text-align: right;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n#chat-box .received {\n  text-align: left;\n  margin-left: 0;\n  margin-right: auto;\n}\n\n#chat-box .chat-bubble {\n  border-radius: 6px;\n  padding: 6px 12px;\n  word-wrap: break-word;\n  margin-top: 0.5em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 70%;\n}\n\n#chat-box .sent .chat-bubble{\n  margin-left: auto;\n  margin-right: 0;\n  background: #1787FB;\n  color: white;\n\n}\n\n#chat-box .received .chat-bubble{\n  margin-left: 0;\n  margin-right: auto;\n  background: white;\n  color: black;\n}\n\n#chat-box .time-tag{\n  font-size: 0.7em;\n  color: var(--warm-grey);\n}\n\n#chat-box .chat-bubble-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#chat-app .dropdown {\n  display: none;\n  position: absolute;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  background: white;\n  width: 300px;\n  height: 200px;\n  bottom: 60px;\n  left: 12px;\n}\n\n#chat-app .dropdown.show {\n  display: block;\n}\n\n#chat-app .dropdown button {\n  display: block;\n  width: 90%;\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #e8e8e8;\n  font-size: 18px;\n  font-weight: 300;\n  text-align: center;\n  color: #1787FB;\n}\n\n#chat-app .dropdown button:disabled {\n  color: #cbcbcb;\n}\n\n#chat-box .rating-request, #chat-box .form-request {\n  font-weight: 800;\n}\n\n#chat-box .rating-request rating-star {\n  color: white !important;\n  font-size: 2em;\n}\n\n#chat-box .form-request {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\n.container {\n  cursor: pointer;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 17px;\n  height: 3px;\n  border-radius: 2px;\n  background-color: #FFFFFF;\n  margin: 3px 0;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n/* Rotate first bar */\n.change .bar1 {\n  -webkit-transform: rotate(45deg) translate(3px, 7px) ;\n  transform: rotate(45deg) translate(3px, 7px) ;\n  background-color: black;\n}\n\n/* Fade out the second bar */\n.change .bar2 {\n  opacity: 0;\n  background-color: black;\n}\n\n/* Rotate last bar */\n.change .bar3 {\n  -webkit-transform: rotate(-45deg) translate(2px, -6px) ;\n  transform: rotate(-45deg) translate(2px, -6px) ;\n  background-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "/* --------------------------- *\n   Modifying Existing Classes\n * --------------------------- */\n\n/*For Changing colors*/\n.navbar {\n  position: relative;\n  background: #3D52BA;\n  z-index: 7;\n  margin: 0;\n}\n\n.navbar-nav a {\n  color: white !important;\n}\n\n.navbar-brand {\n  color: white !important;\n}\n\n.nav-drawer {\n  z-index: 2;\n}\n\n.navbar-brand .logo {\n  height: 65%;\n}\n\n/*???*/\nform {\n  position: relative;\n  width: 40%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n/* --------------------------- *\n   Navigation bar's buttons\n * --------------------------- */\n\n .btn-default {\n   background-color: #3D52BA;\n   border-color: #3D52BA;\n   color: var(--white);\n }\n\n .btn-default:hover {\n   color: var(--warm-grey);\n }\n\n .btn-default:active {\n   background-color: #3D52BA;\n   border-color: #3D52BA;\n   color: var(--greyish-brown);\n }\n\n /* overlay for when drawer is expanded */\n #overlay-bg {\n   position: fixed;\n   top: 0;\n   left: 0;\n   width: 100%;\n   height: 100%;\n   background: #000000;\n   z-index: 5;\n   opacity: 0;\n   visibility: hidden;\n   -webkit-transition: 0.4s;\n   transition: 0.4s;\n }\n\n #overlay-bg.show {\n   opacity: 0.2;\n   visibility: visible;\n }\n\n/* --------------------------- *\n   For the drawer menu button\n * --------------------------- */\n\n#btn-menu-container {\n  margin-right: 1em;\n  margin-top: 0.5em;\n  margin-left: 0.5em;\n  display: inherit;\n  height: 80%;\n  z-index: 11;\n  position: relative;\n}\n\n#drawer-exit-btn  {\n\n}\n\n/* overlay for when drawer is expanded */\n#overlay-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  z-index: 6;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n#overlay-bg.show {\n  opacity: 0.6;\n  visibility: visible;\n}\n\n/* --------------------------- *\n   Search bar Formatting\n * --------------------------- */\n\n/*For search bar's positioning and dimension*/\n#search-area {\n  width: 100%;\n\n}\n\n#search-bar {\n  width: 100%;\n  border-radius: 25px;\n}\n\n/*For search glyphicon positioning*/\n.left-inner-addon {\n    position: relative;\n    color: grey;\n}\n.left-inner-addon input {\n    padding-left: 30px;\n}\n.left-inner-addon i {\n    position: absolute;\n    padding: 9px 2%;\n    pointer-events: none;\n}\n\n/* --------------------------- *\n   General Formatting\n * --------------------------- */\n\n/* for centering */\n.ct-flex-cn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.ct-flex-in {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.center-text {\n  text-align: center;\n}\n\n/* --------------------------- *\n   Responsive\n * --------------------------- */\n\n.container {\n  display: block;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#drawer {\n  position: fixed;\n  right: 0;\n  top: 0;\n  background: var(--white);\n  height: 100%;\n  width: 300px;\n  overflow-x: hidden;\n  padding-top: 50px;\n  z-index: 10;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding-left: 15px;\n}\n\n.hidden{\n  -webkit-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n  visibility: hidden;\n}\n\nh1 {\n  margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#prod-post-app{\n    padding: 0;\n    height: 100%;\n}\n\n#prod-nav{\n    margin-top: 3%;\n    margin-left: 5%;\n}\n\n#current-page{\n    font-size: 20px;\n}\n.prod-post-detail{\n    margin-top: 2%;\n    margin-left: 15%;\n}\n\n.fcontrol{\n    margin-bottom: 4%;\n}\n.form-control{\n    margin-left :5%;\n    width: 60%;\n}\n\n.table-control{\n    width: 100%;\n\n}\n\n.table-control td {\n    padding-bottom: 2%;\n}\n\n.left-table{\n    text-align: right;\n    width: 30%;\n}\n\n.label-control{\n    text-align: right;\n    font-size: 150%;\n}\n\n.price-form-control{\n    margin-left : 10%;\n    width: 45%;\n    height:32px;\n}\n\n.price-label-control{\n    font-size: 100%;\n    margin-left: 5%;\n}\n\n.price-note-control{\n    float: left;\n    margin-left: 10%;\n}\n\n.prod-detail-label-control{\n    text-align: right;\n    font-size: 150%;\n}\n.pro-detail-form-control{\n    padding-bottom: 130px;\n    margin-left : 5%;\n    height: 150px;\n    width: 60%;\n    font-size: large;\n    overflow: scroll;\n    resize: none;\n}\n\n.location-select-control{\n    margin-left :0%;\n    width: 100%;\n}\n\n.location-select-control #city{\n    margin-top: 5px;\n}\n\n#sell-note{\n    margin-left: 5%;\n    font-size: 18px;\n}\n\n#sell-note b{\n    font-weight: 600;\n}\n.btn-control{\n\n}\n.btn-post{\n    display: block;\n    margin-left:43%;\n}\n\n.img-preview img {\n  background: red;\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".rating {\n  unicode-bidi: bidi-override;\n  direction: rtl;\n}\n.rating > span {\n  display: inline-block;\n  position: relative;\n  width: 1.1em;\n  color: #858585;\n}\n.rating.active > span:hover:before,\n.rating.active > span:hover ~ span:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: #f2d900;\n}\n\n.rating > span.selected:before,\n.rating > span.selected ~ span:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: #f2d900;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".catalogue-box {\n  width: 100%;\n  height: 100%;\n}\n\n.catalogue-box ul {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.catalogue-box li {\n  list-style-type: none;\n  width: calc(100%/5);\n  display: inline-block;\n  padding: 1em;\n  cursor: pointer;\n}\n\n.catalogue-box li:hover .product-image {\n  box-shadow: 2px 2px 23px -1px rgba(0,0,0,0.15);\n}\n\n.category-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #b5b5b5;\n  width: 100%;\n  padding-top: 80%;\n}\n\n.category-detail {\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.category-detail .my-row{\n  display: block;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.inline {\n  display: inline;\n}\n\n.no-wrap {\n  text-wrap: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 1080px) {\n  .product-detail .my-row{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".top-bar {\n  display: block;\n}\n\n.top-bar h1 {\n  display: inline-block;\n}\n\n.filter {\n  float: right;\n  display: inline-block;\n}\n\n.filter select {\n  border: 1px solid gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".center-buttons {\n  min-height: 350px;\n  max-height: 40%;\n}\n\n.center-buttons .buttons-groups {\n  margin: 0 auto;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display: block;\n}\n\n.center-buttons button, .center-buttons a {\n  border: none;\n  position: relative;\n  margin: 0 10px;\n  float: left;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  text-decoration: none;\n}\n\n.center-buttons .buy {\n  background-image: url(\"/assets/img/buy-button.png\");\n}\n\n.center-buttons .help {\n  border-radius: 50%;\n  background: var(--iris);\n  font-family: Thonburi;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.center-buttons div {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.center-buttons .sell {\n  width: 80px;\n  height: 80px;\n  background-image: url(\"/assets/img/sell-button.png\");\n}\n\n.center-buttons .buy, .center-buttons .help {\n  width: 60px;\n  height: 60px;\n  top: 10px;\n}\n\n@media only screen and (min-width: 500px) {\n  .center-buttons .sell {\n    width: 140px;\n    height: 140px;\n  }\n\n  .center-buttons .buy, .center-buttons .help {\n    width: 110px;\n    height: 110px;\n    top: 15px;\n  }\n\n}\n\n\n/* for centering */\n.ct-flex-cn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.ct-flex-in {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.center-text {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".product-detail {\n  width: 100%;\n  height: 45vh;\n  min-height: 450px;\n  max-height: 45vh;\n  display: block;\n  padding-top: 20px;\n}\n\n.product-detail .left,\n.product-detail .right {\n  min-height: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.product-detail .left {\n  float: left;\n  display: inline-block;\n  width: 60%;\n}\n\n.product-detail .right {\n  display: inline-block;\n  width: 40%;\n  padding-left: 1.5em;\n}\n\n.current-product-image {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: var(--white);\n  width: 100%;\n  height: 80%;\n  margin: 0 auto;\n}\n\n.product-detail h3 {\n  font-weight: 400;\n}\n\n.product-detail .carousel {\n\n}\n\n.description {\n  margin-top: 1em;\n}\n\n.buy-groups {\n  position: absolute;\n  bottom: 5%;\n}\n\n.product-info .item-number {\n  color: #c1c1c1;\n}\n\n.product-info p {\n  color: var(--warm-grey);\n  font-size: 1em;\n}\n\n.product-info h4 {\n  color: #db1c1c;\n  font-size: 1.5em;\n}\n\n.product-info .buy-groups button {\n  padding: 0.6em 3em;\n  font-size: 1em;\n  border-radius: 5px;\n  border-style: none;\n  background-color: #f6a623;\n  color: white;\n  margin-right: 1em;\n}\n\n.product-info .buy-groups a {\n  cursor: pointer;\n  color: #d0021b;\n  text-decoration: underline;\n}\n\n.product-info .buy-groups a:hover {\n  color: red;\n  text-decoration: underline;\n}\n\n.product-detail .carousel {\n  height: 18%;\n}\n\n.product-detail .carousel ul {\n  height: 100%;\n  padding: 0;\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.product-detail .carousel li {\n  list-style-type: none;\n  display: inline-block;\n  width: calc(100%/8);\n  margin-right: 15px;\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.product-detail .carousel li.selected {\n  opacity: 1;\n}\n\n.product-detail .carousel li:hover {\n  opacity: 1;\n}\n\n.product-detail .carousel .img {\n  padding-top: 100%;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--white);\n  background-repeat: no-repeat;\n}\n\n.product-detail .rating {\n  text-align: left;\n  font-size: 1.2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#prod-module {\n    border: 1px solid #e8e8e8;\n    height: 100%;\n    max-width: 900px;\n    margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "/*\nCreated by Andy 6/4/2017\n*/\n\n/* ---------------------- *\n  Layout formatting\n * ---------------------- */\n\n#star-ins {\n  margin-bottom: 0.7em;\n  font-size: 1.5em;\n  margin-top: 1em;\n  margin-left: 5%;\n}\n\n#star-input {\n  margin: 0 auto;\n  width: 40%;\n  font-size: 5em;\n}\n\n\n.same-line-container {\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n  margin-bottom: 2em;\n}\n\n.same-line-block {\n  display: inline-block;\n  height: 30em;\n}\n\n#img-block {\n  float: left;\n  background-color: var(--pinkish-grey);\n  width: 45%;\n  position: relative;\n}\n\n#description-block {\n  float: right;\n  text-align: left;\n  width: 50%;\n}\n\n.des {\n  margin-top: 0.5em;\n}\n\n#blankspace {\n  height: 10em;\n}\n\n/* ---------------------- *\n  Image's formatting\n * ---------------------- */\n\n.img-responsive {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n }\n\n/* ---------------------- *\n  Label's formatting\n * ---------------------- */\n\n#recent-purchase-label {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n#price {\n  font-size: 1.2em;\n  margin-left: 1em;\n  color: var(--iris);\n}\n\n#contact-link {\n  font-size: 0.8em;\n  margin-left: 1.5em;\n}\n\n.tag {\n  font-size: 1em;\n  font-weight: lighter;\n  color: var(--warm-grey);\n}\n\n.name {\n  font-size: 1.2em;\n  font-weight: normal;\n}\n\n/* ---------------------- *\n  star div\n * ---------------------- */\n\n#review-sec {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  text-align: center;\n}\n\n#star-rating {\n  margin: 0 auto;\n  width: 50%;\n  font-size: 2em;\n}\n\n#number-review {\n  color: var(--warm-grey);\n  font-size: 0.8em;\n  font-weight: lighter;\n}\n\n/* ---------------------- *\n  star div\n * ---------------------- */\n\n #btn-send-form {\n   display: block;\n   margin: 0 auto;\n   margin-top: 1.5em;\n }\n\n#feedback-instruction {\n  margin-top: 1em;\n  margin-bottom: 0.7em;\n  font-size: 1.5em;\n}\n\n#feedback-input {\n  width: 100%;\n  border-radius: 0.5em;\n}\n\ntextarea {\n  resize: none;\n  font-size: 1.1em;\n}\n\n#feedback-sec {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<!--hidden message for unit test-->\n<h1 style=\"display: none\">{{title}}</h1>\n<!-- Home Page -->\n<!-- Nav Area containing the header, this will be presented in every page -->\n<nav-area id=\"nav-area\"></nav-area>\n\n<!--\n  When ever the browser redirect or the user click on a link within the app,\n  the component inside this <router-outlet> is replaced so no actual page\n  refresh will happen.\n-->\n<div class=\"main-component fit-screen-height\">\n  <router-outlet id=\"router-outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"catalogue-box\">\n  <ul *ngIf=\"products\">\n    <!-- change the limit to specify the maximum number of listing to show -->\n    <li\n      *ngFor=\"let p of products | slice:0:ITEM_LIMIT;\"\n      [routerLink]=\"['/product', p?.iid]\"\n    >\n      <div\n        class=\"product-image\"\n        [ngStyle]=\"{\n        'background-image': 'url(' + ((p?.img_urls != null) ? p.img_urls[0] : 'undefined') + ')'\n        }\"\n      >\n\n      </div>\n\n      <div class=\"product-detail\">\n        <div class=\"my-row no-wrap\">\n          <span>{{p?.name}}</span>\n        </div>\n        <div class=\"my-row\">\n          <div class=\"left\">\n            <div class=\"seller-name\">\n              <span class=\"no-wrap\">\n                by <a routerLink=\"/chat\">{{p?.seller?.name}}</a>\n              </span>\n            </div>\n            <div class=\"rating\">\n              <rating-star [rate]=\"p?.seller?.rating\"></rating-star>\n            </div>\n          </div>\n\n          <div class=\"right\">\n            <span class=\"price\">฿{{p?.price}}</span>\n          </div>\n        </div>\n        <div class=\"my-row no-wrap\">\n          <span class=\"location\">{{p?.location?.province}} {{p?.location?.city}}</span>\n        </div>\n\n      </div>\n    </li>\n  </ul>\n  <div *ngIf=\"!products || products.length <= 0\">\n    Nothing to show\n  </div>\n</div>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<!--\n  Created by Woods and SaiRung on 27/3/17.\n-->\n<div id=\"chat-app\">\n\n  <!-- LEFT SIDE -->\n\n  <div id=\"chat-left-side\" class=\"right-border\">\n    <div class=\"chat-top-section\">\n    </div>\n\n    <div *ngIf=\"conversationList\">\n      <div\n        class=\"chat-conversation\"\n        *ngFor= \"let c of conversationList\"\n        (click)=\"showSelected(c)\"\n        [class.selected]=\"c === selectedConvo\"\n      >\n        <div class =\"prof-pic\">\n          <img\n            *ngIf=\"c.profile_pic\"\n            class=\"prof-circle\" src=\"{{c.profile_pic}}\"\n          >\n        </div>\n        <div class=\"chat-info\">\n          <div class=\"cinfo\">\n            <p id=\"chatter\">{{ c.sender_name }}</p>\n            <p id=\"messages\">{{c.msg}}</p>\n            <p id=\"time\">{{c.timestamp}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- RIGHT SIDE -->\n\n  <div id=\"chat-right-side\" class=\"full-height\">\n    <div class=\"chat-top-section\">\n\n      <div id=\"seller-profile\" class=\"right-border top-section-block\">\n\n        <div id=\"profile-img\" class=\"rounded-img\">\n          <img\n            class=\"prof-circle\" src=\"{{selectedConvo?.profile_pic}}\"\n          >\n        </div>\n\n        <div id=\"seller-info\" class=\"\">\n          <!--Prevent error when nothing is selected-->\n          <span\n            *ngIf=\"(selectedConvo!==null)&&(selectedConvo!=='undefined')\"\n          >{{ selectedConvo.sender_name }}</span>\n          <div\n            *ngIf=\"current_uid == selectedConvo?.buyer_uid\"\n            id=\"star-rating\"\n          >\n            <rating-star [rate]=\"selectedProduct?.seller?.rating\"></rating-star>\n          </div>\n        </div>\n\n        <div class=\"center-horizontal left-padding seller-buttons\">\n          <button\n            *ngIf=\"current_uid == selectedConvo?.buyer_uid\"\n            class=\"btn-rect\" [routerLink]=\"['/rating', selectedProduct?.iid]\"\n          >\n            ให้คะแนน\n          </button>\n          <button class=\"btn-rect\">จัดการ</button>\n        </div>\n\n      </div> <!-- seller-profile -->\n\n      <div id=\"item-detail\" class=\"top-section-block\" *ngIf=\"selectedProduct\">\n        <div class=\"product-image\">\n          <img\n            *ngIf=\"selectedProduct.img_urls\"\n            src=\"{{selectedProduct.img_urls[0]}}\"\n          >\n        </div>\n        <div class=\"float-right\">\n          <h4> {{selectedProduct.name}} </h4>\n          <span> {{selectedProduct.price}} บาท </span>\n        </div>\n      </div> <!-- item-detail -->\n\n    </div> <!-- chat-top-section -->\n\n\n    <div #scrollMe id=\"chat-box\">\n      <ul>\n        <li *ngFor=\"let m of messages\">\n          <div\n            class=\"wrapper\"\n            [ngClass]=\"[m.sender == current_uid ? 'sent' : 'received']\"\n          >\n            <div class=\"chat-bubble-wrapper\">\n              <div class=\"chat-bubble\">\n                <!--Normal Message-->\n                <div *ngIf=\"m.flag == 0\">{{m.message}}</div>\n                <!--Rating Form -->\n                <div *ngIf=\"m.flag == 1\" class=\"rating-request\">\n                  ช่วยให้คะแนนด้วยครับ/คะ!\n                  <rating-star [active]=\"current_uid == selectedConvo.buyer_uid\" (ratingEmitter)=\"sendRating($event)\"></rating-star>\n                </div>\n                <!--Delivery Form-->\n                <div *ngIf=\"m.flag == 2\" class=\"form-request\"\n                     (click)=\"formClicked()\"\n                >\n                  กรุณากรอกข้อมูล\n                  <img src=\"http://is2.mzstatic.com/image/thumb/Purple111/v4/c2/62/01/c2620153-7347-6db4-3f9e-5bc05be1e503/source/175x175bb.jpg\">\n                </div>\n              </div>\n            </div>\n            <span class=\"time-tag\">\n              {{m.timestamp | date: 'hh:mm a'}}\n            </span>\n          </div>\n        </li>\n      </ul>\n\n    </div> <!-- chat box -->\n\n    <!--\n      TODO: center input box vertically\n      TODO: scroll to bottom upon message sent\n      FIXME: chat-box overlapping with top-section on small screen\n    -->\n\n    <div class=\"bottom-bar-container\">\n      <div class=\"bottom-bar center-horizontal\">\n        <div class=\"dropdown\" [class.show]=\"isMenuExpanded\">\n          <button disabled>ส่งรูปภาพ</button>\n          <div\n            *ngIf=\"current_uid == selectedConvo?.seller_uid\"\n            class=\"seller-forms-request\"\n          >\n            <button (click)=\"requestRating()\">ขอคะแนน (rating)</button>\n            <button (click)=\"sendDeliveryForm()\">ส่งแบบฟอร์ม Kerry Express</button>\n            <button disabled>ส่งแบบฟอร์ม XYZ</button>\n          </div>\n        </div>\n        <button id=\"btn-menu\" class=\"btn-rect\" (click)=\"toggleMenu()\">\n          menu\n        </button>\n        <input\n          id=\"message-box\"\n          class=\"\" type=\"text\"\n          placeholder=\"พิมพ์ข้อความ...\"\n          [(ngModel)]=\"chatMessageInput\"\n          (keydown.enter)=\"sendMessage(chatMessageInput)\"\n        >\n        <button id=\"btn-send\" class=\"btn-rect\" (click)=\"sendMessage(chatMessageInput)\">send</button>\n      </div>\n    </div>\n\n  </div> <!-- chat-right-side -->\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container\"\n  [class.change] = \"isMenuExpanded\"\n  (click)=\"toggleState()\"\n>\n  <div class=\"bar1\"></div>\n  <div class=\"bar2\"></div>\n  <div class=\"bar3\"></div>\n</div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top ct-flex-in\" id=\"navbar-default\">\n      <div class=\"container-fluid\">\n\n        <a routerLink=\"/home\" class=\"navbar-brand\">\n          <img class=\"logo\" src=\"/assets/img/Kaidee-logo-300.png\" alt=\"kaidee-logo\">\n        </a>\n\n        <div>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <button class=\"btn btn-default\" [routerLink]=\"['/categories']\">\n                <span class=\"glyphicon glyphicon-th\"></span> หมวดหมู่\n              </button>\n            </li>\n            <li>\n              <button class=\"btn btn-default\" [routerLink]=\"'/chat'\">\n                <span class=\"glyphicon glyphicon-user\"></span> พูดคุย\n              </button>\n            </li>\n            <li><div id=\"btn-menu-container\" class=\"ct-flex-in ct-flex-cn\">\n              <btn-menu\n                class=\"ct-flex-in\"\n                id=\"menu-button\"\n                (onClickEvent)=\"toggleDrawer($event)\"\n                [isMenuExpanded]=\"isDrawerExpanded\"\n              ></btn-menu>\n            </div></li>\n          </ul>\n\n          <form class=\"navbar-form center-text\" role=\"search\">\n            <div class=\"form-group left-inner-addon\" id=\"search-area\">\n              <i class=\"glyphicon glyphicon-search\"></i>\n              <input type=\"text\" class=\"form-control\" id=\"search-bar\" placeholder=\"ค้นหา\">\n            </div>\n          </form>\n\n          <nav-drawer class=\"nav-drawer\" [isExpanded]=\"isDrawerExpanded\"></nav-drawer>\n\n        </div>\n      </div>\n\n\n  </nav>\n  <div\n    id=\"overlay-bg\"\n    [class.show]=\"isDrawerExpanded\"\n    (click)=\"isDrawerExpanded = !isDrawerExpanded\"\n  ></div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div id=\"drawer\" [class.hidden] = \"!isExpanded\">\n  <h1>Navigation:</h1>\n  <h4>Coming Soon!</h4>\n</div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<!--\nFIXME: THIS SCREAM F*CK MY LIFEEEEEEEE!\n-->\n<div id=\"prod-post-app\">\n\n  <!--Breadcrumb-->\n  <div id=\"prod-nav\">\n    <h4 id=\"current-page\">หน้าแรก > ลงขาย </h4>\n  </div>\n\n  <!--PRODUCT POSTING DETAIL-->\n  <div class=\"prod-post-detail\">\n    <form (ngSubmit)=\"onSubmit()\" id='prodselling' #prodForm=\"ngForm\">\n      <table class=\"table-control\">\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"pname\" class=\"label-control\">ตั้งชื่อสินค้าที่คุณต้องการขาย</label></td>\n          <td>\n            <input\n              type=\"text\"\n              id=\"pname\"\n              class=\"form-control\"\n              name=\"pname\"\n              required\n              [(ngModel)]=\"newProduct.name\"\n            >\n          </td>\n        </tr>\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"category\" class=\"label-control\">เลือกหมวดหมู่ให้ตรงกับสินค้า</label></td>\n          <td>\n            <select\n              id=\"category\"\n              class=\"form-control\"\n              name=\"category\"\n              [(ngModel)]=\"newProduct.category.cid\"\n            >\n              <option value=\"noption\" disabled>กรุณาเลือก</option>\n                <!-- [value] is equal to cid to test for console.log -->\n              <option *ngFor=\"let c of categories\" [value]=\"c?.cid\">{{c?.name}}</option>\n            </select>\n        </tr>\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"price\" class=\"label-control\">ระบุราคาที่เหมาะสม</label>\n          </td>\n          <td>\n            <input\n              type=\"number\"\n              id=\"price\"\n              class=\"form-control\"\n              name=\"price\"\n              [(ngModel)]=\"newProduct.price\"\n            >\n            <label for=\"price\" class=\"price-label-control\">ราคารวมมูลค่าของแถม (ถ้ามี)</label>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"imgs\" class=\"label-control\">รูปภาพสินค้า</label>\n          </td>\n          <td>\n            <input\n              type=\"file\"\n              id=\"imgs\"\n              class=\"form-control\"\n              multiple\n              (change)=\"fileChange(input)\"\n              accept=\"image/*\" #input>\n            <div *ngFor=\"let data of imgDataURLs;\" class=\"img-preview\">\n              <img [attr.src]='data' />\n            </div>\n\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"pro-detail\" class=\"prod-detail-label-control\">ใส่รายละเอียดสินค้าให้ครบถ้วน</label>\n          </td>\n          <td>\n            <textarea\n              id=\"pro-detail\"\n              class=\"pro-detail-form-control\"\n              [(ngModel)]=\"newProduct.description\"\n              name=\"description\"\n              required\n            ></textarea>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"deliveryService\" class=\"label-control\">ระบบขนส่งสินค้า</label>\n          </td>\n          <td>\n            <select\n              id=\"deliveryService\"\n              class=\"form-control\"\n              [(ngModel)]=\"newProduct.delivery_options\"\n              name=\"service\" required\n            >\n              <option value=\"noption\" disabled>กรุณาเลือก</option>\n              <option *ngFor=\"let s of services\" [value]=\"s\">{{s.name}}</option>\n            </select>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"province\" class=\"label-control\">ระบุพื้นที่ของสินค้า</label>\n          </td>\n          <td>\n            <table class=\"location-select-control\">\n              <tr>\n                <select\n                  id=\"province\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"newProduct.location.province\"\n                  name=\"province\"\n                >\n                  <option value=\"noption\" disabled>เลือกจังหวัด</option>\n                  <option *ngFor=\"let province of provinces\" [value]=\"province\">{{province}}</option>\n                </select>\n              </tr>\n              <tr>\n                <select\n                  id=\"city\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"newProduct.location.city\"\n                  name=\"city\">\n\n                  <option value=\"noption\" disabled>เลือกอำเภอ</option>\n                  <option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</option>\n                </select>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"left-table\">\n            <label for=\"contact\" class=\"label-control\">เบอร์มือถือ</label>\n          </td>\n          <td>\n            <input\n              type=\"text\"\n              id=\"contact\"\n              class=\"form-control\"\n              [(ngModel)]=\"newProduct.seller.contact\"\n              name=\"contact\"\n              required\n            >\n          </td>\n        </tr>\n        <td class=\"left-table\"></td>\n        <td>\n          <p id=\"sell-note\">คลิกปุ่ม <b>\"ลงขาย\"</b> เพื่อยอมรับ <a href=\"https://www.kaidee.com/helps/terms/\">ข้อกำหนดและเงื่อนไขการลงประกาศ</a></p>\n        </td>\n        <tr>\n          <td colspan=\"2\">\n            <button type=\"submit\" class=\"btn-post\">Submit</button>\n          </td>\n        </tr>\n\n      </table>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div class=\"rating\" [class.active]=\"active\">\n  <span\n    *ngFor=\"let n of [5,4,3,2,1]\"\n    (click)=\"starClicked(n)\"\n    [class.selected]=\"n==rate\"\n  >\n    ☆\n  </span>\n</div>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"catalogue-box\">\n  <ul *ngIf=\"categories\">\n    <!-- change the limit to specify the maximum number of listing to show -->\n    <li\n      *ngFor=\"let c of categories\"\n      [routerLink]=\"['/category', c?.cid]\"\n    >\n      <div\n        class=\"category-image\"\n      >\n      </div>\n      <div class=\"category-detail\">\n        <div class=\"my-row no-wrap\">\n          <span>{{c?.name}}</span>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <a routerLink=\"/categories\">Back</a><br>\n  <h1>{{category?.name}} ({{count}})</h1>\n\n  <div class=\"filter\">\n    <select id=\"location\">\n      <option disabled>ทุกจังหวัด</option>\n      <option disabled>-</option>\n    </select>\n    <select id=\"price\">\n      <option disabled>ราคา</option>\n      <option disabled>-</option>\n    </select>\n  </div>\n\n</div>\n\n<catalogue-component [ITEM_LIMIT]=\"40\" [products]=\"products\"></catalogue-component>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<div class=\"container full-height\">\n  <chat-component></chat-component>\n</div>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"center-buttons ct-flex-cn\">\n  <div class=\"buttons-groups ct-flex-in\">\n    <button class=\"sell\" [routerLink]=\"['/prod-post']\"></button>\n    <button class=\"buy\" [routerLink]=\"['/categories']\"></button>\n    <a class=\"help\" href=\"https://www.kaidee.com/helps/\">\n      <div>ช่วยเหลือ</div>\n    </a>\n  </div>\n</div>\n\n<recommendation-box></recommendation-box>\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"product-detail\"\n  *ngIf=\"selectedProduct\"\n>\n  <div class=\"left\">\n    <div\n      class=\"current-product-image\"\n      [ngStyle]=\"{ 'background-image': 'url(' + selectedImage + ')'}\"\n    >\n\n    </div>\n    <div class=\"carousel\">\n      <ul>\n        <li *ngFor=\"let img of selectedProduct.img_urls\"\n            [class.selected]=\"img===selectedImage\"\n        >\n          <div\n            class=\"img\"\n            [ngStyle]=\"{ 'background-image': 'url(' + img + ')'}\"\n            (click)=\"selectImg(img)\"\n          ></div>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div\n    class=\"product-info right\"\n  >\n    <h3>{{selectedProduct.name}}</h3>\n    <p class=\"item-number\">หมายเลขประกาศ: {{selectedProduct.iid}}</p>\n    <p>ผู้ขาย: <span><a>{{selectedProduct.seller.name}}</a></span></p>\n    <div class=\"rating\"><rating-star [rate]=\"selectedProduct.seller?.rating\"></rating-star></div>\n    <p>จำนวนผู้ให้คะแนน ({{selectedProduct.seller?.rating_count}})</p>\n    <p>{{selectedProduct.location.province}} {{selectedProduct.location.city}}</p>\n    <p>{{selectedProduct.since}}</p>\n\n    <h4>{{selectedProduct.price}} ฿</h4>\n\n    <!-- Disable this button if is owner of the item -->\n    <div class=\"buy-groups\">\n      <button\n        [disabled]=\"current_uid == product?.seller?.sid\"\n        (click)=\"toChatRoom()\"\n      >\n        ซื้อเลย\n      </button>\n      <a>แจ้งประกาศไม่เหมาะสม</a>\n    </div>\n\n  </div>\n\n  <div class=\"description\">\n    <p>\n      {{selectedProduct.description}}\n    </p>\n  </div>\n\n  <recommendation-box></recommendation-box>\n\n</div>\n<div *ngIf=\"!selectedProduct\">\n  <h1>404</h1>\n  <h3>Product Not Found!</h3>\n</div>\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<!--Created by Andy 6/4/2017-->\n<!--Modified by Woods 27/4/2017-->\n<div *ngIf=\"product\">\n  <h2 id=\"recent-purchase-label\">รายการที่คุณเพิ่งซื้อไป</h2>\n  <div class=\"same-line-container\">\n\n    <div class=\"same-line-block\" id=\"img-block\">\n      <img\n        *ngIf=\"product.img_urls\"\n        src={{product.img_urls[0]}} class=\"img-responsive center-block\">\n    </div>\n\n    <div class=\"same-line-block\" id=\"description-block\">\n      <div id=\"product-des\" class=\"des\">\n        <label id=\"product-tag\" class=\"tag\">สินค้า:</label>\n        <label id=\"product-name\" class=\"name\">{{product.name}}</label>\n        <label id=\"price\">{{product.price}} บาท</label>\n      </div>\n      <div id=\"basic-des\" class=\"des\">\n        <label id=\"seller-tag\" class=\"tag\">ผู้ขาย:</label>\n        <label id=\"seller-name\" class=\"name\">{{product.seller?.name}}</label>\n        <a href=\"#\" id=\"contact-link\">(CONTACT)</a>\n      </div>\n      <div id=\"review-sec\">\n        <div id=\"star-rating\">\n          <rating-star [rate]=\"product.seller?.rating\"></rating-star>\n        </div>\n        <label id=\"number-review\">ได้รับการรีวิวทั้งหมด {{rating_count}} ครั้ง</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"\">\n    <div id=\"star-ins-sec\">\n      <label id=\"star-ins\">โปรดให้คะแนนความพึงพอใจของท่านกับการบริการของผู้ขาย</label>\n    </div>\n    <div id=\"star-input\">\n      <rating-star [active]=\"true\" (ratingEmitter)=\"ratingUpdate($event)\"></rating-star>\n    </div>\n  </div>\n\n  <div id=\"feedback-sec\">\n    <div class=\"\">\n      <label id=\"feedback-instruction\">โปรดแสดงความคิดเห็นเพิ่มเติมเกี่ยวกับผู้ขาย</label>\n    </div>\n    <div class=\"\">\n      <textarea type=\"text\" id=\"feedback-input\" [(ngModel)]=\"feedback\" placeholder=\"ลงคำอธิบายได้ที่นี่...\" rows=\"10\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"\">\n    <button type=\"button\" (click)=\"sendData()\" class=\"btn btn-success\" id=\"btn-send-form\">ส่งแบบฟอร์ม</button>\n  </div>\n  <div id=\"blankspace\">\n  </div>\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(420);


/***/ })

},[773]);
//# sourceMappingURL=main.bundle.js.map