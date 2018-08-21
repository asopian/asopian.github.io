(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: 'pokemons', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_2__["PokemonsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pokemon Gallery';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_6__["PokemonsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 576px) {\n.header-container-xs h1 span:after {\n\tcontent: '(xs)';\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 768px) {\n.header-container-sm h1 span:after {\n\tcontent: '(sm)';\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n.header-container-md h1 span:after {\n\tcontent: '(md)';\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n.header-container-lg h1 span:after {\n\tcontent: '(lg)';\n}\n}\n@media only screen and (min-width: 1200px) {\n.header-container-xl h1 span:after {\n\tcontent: '(xl)';\n}\n}\n.header-container {\r\n\tbackground-image: url('/assets/images/hero-background.jpg');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\theight: 30vw;\r\n\twidth: 100%;\r\n}\n.header-container h1 {\r\n\ttext-align: center;\r\n}\n.header-container h1 span {\r\n\tfont-family: Pokemon-Solid;\r\n\tletter-spacing: 0.1em;\r\n\tcolor: yellow;\r\n\tfont-weight: bold;\r\n\twhite-space: nowrap;\r\n\tline-height: 19vw;\r\n\tfont-size: 6vw;\r\n}\n.header-container h1 span:after {\r\n\tvertical-align: super;\r\n\tfont-size: 2vw;\r\n\tletter-spacing: 0.1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container header-container-xs header-container-sm header-container-md header-container-lg header-container-xl\">\n\t<h1>\n\t\t<span>{{title}}</span>\n\t</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pokemon.service.ts":
/*!************************************!*\
  !*** ./src/app/pokemon.service.ts ***!
  \************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemon */ "./src/app/pokemon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonService = /** @class */ (function () {
    // private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"';  // paging
    // private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/1/';  // Pokemon detail
    // ---------- Local URL
    // private pokeapiUrl = 'assets/pokeapi_151.json';
    // private pokeapiUrl = 'assets/pokeapi_949.json';
    function PokemonService(http) {
        this.http = http;
        // ---------- Remote URL
        this.pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    }
    /** GET pokemons from the server */
    PokemonService.prototype.getPokemons = function () {
        var convertToPokemonArray = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            var objList = value['results'];
            var pokemons = objList.map(function (pokemon, index) {
                return new _pokemon__WEBPACK_IMPORTED_MODULE_4__["Pokemon"](pokemon.url, pokemon.name);
            });
            return pokemons;
        });
        return convertToPokemonArray(this.http.get(this.pokeapiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPokemons', []))));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PokemonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation + ': ' + error); // log to console
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PokemonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/app/pokemon.ts":
/*!****************************!*\
  !*** ./src/app/pokemon.ts ***!
  \****************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokemon", function() { return Pokemon; });
var Pokemon = /** @class */ (function () {
    /*
    constructor(url: string, name: string, id: number) {
      this.url = url;
      this.name = name;
      this.id = id;
    }
    */
    function Pokemon(url, name) {
        // Capture the last digits of URL as Pokemon ID
        this.idFromUrlPattern = /^.*\/(\d+)\/$/;
        this.url = url;
        this.name = name;
        var parsedValue = url.replace(this.idFromUrlPattern, "$1");
        this.id = parseInt(parsedValue);
    }
    return Pokemon;
}());



/***/ }),

/***/ "./src/app/pokemons/pokemons.component.css":
/*!*************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.html":
/*!**************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<label class=\"form-control\" style=\"text-align: center\"> Page {{currentPage}} / {{totalPages}}</label>\n<div class=\"input-group\">\n  <div class=\"input-group-prepend\">\n    <button class=\"btn btn-primary\" (click)=\"previousPage()\"> << Prev 20 </button>\n  </div>\n\n  <input #searchBox class=\"form-control\" (keyup)=\"search(searchBox.value)\" placeholder=\"Enter search term here...\" />\n\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-primary\" (click)=\"nextPage()\"> Next 20 >> </button>\n  </div>\n</div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-xl-3\" *ngFor=\"let poke of pokemonsDisplayed\">\n      <div class=\"container\">\n        <div class=\"row\" style=\"align-items: center; text-align: center;\">\n          <div class=\"col-6 col-md-12 col-xl-12\">\n            <img src=\"assets/images/{{poke.id}}.png\" />\n          </div>\n          <div class=\"col-6 col-md-12 col-xl-12\">\n            #{{poke.id}}<br/>{{poke.name}}\n          </div>\n          <div class=\"col-12\">\n            <br/>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.ts ***!
  \************************************************/
/*! exports provided: PokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsComponent", function() { return PokemonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pokemon.service */ "./src/app/pokemon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.ITEMS_PER_PAGE = 20;
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        this.currentSearch = "";
        this.currentPage = 1;
        this.getPokemons();
    };
    PokemonsComponent.prototype.getPokemons = function () {
        var _this = this;
        this.pokemonService.getPokemons()
            .subscribe(function (pokemons) {
            _this.pokemonsFull = pokemons;
            _this.updateFilteredPokemons();
        });
    };
    PokemonsComponent.prototype.updateFilteredPokemons = function () {
        var _this = this;
        this.pokemonsFiltered =
            this.pokemonsFull
                .filter(function (pokemon) { return pokemon.name.match(new RegExp(_this.currentSearch, 'i')); });
        this.updateDisplayedPokemons();
    };
    PokemonsComponent.prototype.updateDisplayedPokemons = function () {
        this.totalPages = Math.ceil(this.pokemonsFiltered.length / this.ITEMS_PER_PAGE);
        if (this.currentPage < 1)
            this.currentPage = 1;
        if (this.currentPage > this.totalPages)
            this.currentPage = this.totalPages;
        this.pokemonsDisplayed =
            this.pokemonsFiltered
                .slice((this.currentPage - 1) * this.ITEMS_PER_PAGE)
                .slice(0, this.ITEMS_PER_PAGE);
    };
    PokemonsComponent.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.updateDisplayedPokemons();
    };
    PokemonsComponent.prototype.previousPage = function () {
        this.currentPage = this.currentPage - 1;
        this.updateDisplayedPokemons();
    };
    PokemonsComponent.prototype.search = function (keyword) {
        this.currentSearch = keyword;
        this.updateFilteredPokemons();
    };
    PokemonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemons',
            template: __webpack_require__(/*! ./pokemons.component.html */ "./src/app/pokemons/pokemons.component.html"),
            styles: [__webpack_require__(/*! ./pokemons.component.css */ "./src/app/pokemons/pokemons.component.css")]
        }),
        __metadata("design:paramtypes", [_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]])
    ], PokemonsComponent);
    return PokemonsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\interview_and_personal_projects\pokemon-gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map