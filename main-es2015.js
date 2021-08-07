(self["webpackChunkpokemon_gallery"] = self["webpackChunkpokemon_gallery"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemons/pokemons.component */ 5386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: 'pokemons', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_0__.PokemonsComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'Pokemon Gallery';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemons/pokemons.component */ 5386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__.PokemonsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { title: "title" }, decls: 4, vars: 1, consts: [[1, "header-container", "header-container-xs", "header-container-sm", "header-container-md", "header-container-lg", "header-container-xl"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["@media only screen and (max-width: 576px) {\n.header-container-xs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n\tcontent: '(xs)';\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 768px) {\n.header-container-sm[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n\tcontent: '(sm)';\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n.header-container-md[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n\tcontent: '(md)';\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n.header-container-lg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n\tcontent: '(lg)';\n}\n}\n@media only screen and (min-width: 1200px) {\n.header-container-xl[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n\tcontent: '(xl)';\n}\n}\n.header-container[_ngcontent-%COMP%] {\r\n\tbackground-image: url('/assets/images/hero-background.jpg');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\theight: 30vw;\r\n\twidth: 100%;\r\n}\n.header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\n.header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-family: Pokemon-Solid;\r\n\tletter-spacing: 0.1em;\r\n\tcolor: yellow;\r\n\tfont-weight: bold;\r\n\twhite-space: nowrap;\r\n\tline-height: 19vw;\r\n\tfont-size: 6vw;\r\n}\n.header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n\tvertical-align: super;\r\n\tfont-size: 2vw;\r\n\tletter-spacing: 0.1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQteHMuY3NzIiwiPG5vIHNvdXJjZT4iLCJoZWFkZXIuY29tcG9uZW50LXNtLmNzcyIsImhlYWRlci5jb21wb25lbnQtbWQuY3NzIiwiaGVhZGVyLmNvbXBvbmVudC1sZy5jc3MiLCJoZWFkZXIuY29tcG9uZW50LXhsLmNzcyIsImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Q0FDQyxlQUFlO0FBQ2hCO0NDRkE7QUNBQTtBQUFBO0NBQ0MsZUFBZTtBQUNoQjtDREZBO0FFQUE7QUFBQTtDQUNDLGVBQWU7QUFDaEI7Q0ZGQTtBR0FBO0FBQUE7Q0FDQyxlQUFlO0FBQ2hCO0NIRkE7QUlBQTtBQUFBO0NBQ0MsZUFBZTtBQUNoQjtDSkZBO0FLUUE7Q0FDQywyREFBMkQ7Q0FDM0QsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIteHMgaDEgc3BhbjphZnRlciB7XG5cdGNvbnRlbnQ6ICcoeHMpJztcbn1cbiIsbnVsbCwiLmhlYWRlci1jb250YWluZXItc20gaDEgc3BhbjphZnRlciB7XG5cdGNvbnRlbnQ6ICcoc20pJztcbn1cbiIsIi5oZWFkZXItY29udGFpbmVyLW1kIGgxIHNwYW46YWZ0ZXIge1xuXHRjb250ZW50OiAnKG1kKSc7XG59IiwiLmhlYWRlci1jb250YWluZXItbGcgaDEgc3BhbjphZnRlciB7XG5cdGNvbnRlbnQ6ICcobGcpJztcbn1cbiIsIi5oZWFkZXItY29udGFpbmVyLXhsIGgxIHNwYW46YWZ0ZXIge1xuXHRjb250ZW50OiAnKHhsKSc7XG59XG4iLCJcclxuQGltcG9ydCB1cmwoJy4vaGVhZGVyLmNvbXBvbmVudC14cy5jc3MnKSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpO1xyXG5AaW1wb3J0IHVybCgnLi9oZWFkZXIuY29tcG9uZW50LXNtLmNzcycpIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KTtcclxuQGltcG9ydCB1cmwoJy4vaGVhZGVyLmNvbXBvbmVudC1tZC5jc3MnKSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCk7XHJcbkBpbXBvcnQgdXJsKCcuL2hlYWRlci5jb21wb25lbnQtbGcuY3NzJykgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KTtcclxuQGltcG9ydCB1cmwoJy4vaGVhZGVyLmNvbXBvbmVudC14bC5jc3MnKSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KTtcclxuXHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZXJvLWJhY2tncm91bmQuanBnJyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRoZWlnaHQ6IDMwdnc7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIGgxIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIGgxIHNwYW4ge1xyXG5cdGZvbnQtZmFtaWx5OiBQb2tlbW9uLVNvbGlkO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuXHRjb2xvcjogeWVsbG93O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0bGluZS1oZWlnaHQ6IDE5dnc7XHJcblx0Zm9udC1zaXplOiA2dnc7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIGgxIHNwYW46YWZ0ZXIge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuXHRmb250LXNpemU6IDJ2dztcclxuXHRsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4153:
/*!************************************!*\
  !*** ./src/app/pokemon.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonService": function() { return /* binding */ PokemonService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon */ 8029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);





class PokemonService {
    // private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"';  // paging
    // private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/1/';  // Pokemon detail
    // ---------- Local URL
    // private pokeapiUrl = 'assets/pokeapi_151.json';
    // private pokeapiUrl = 'assets/pokeapi_949.json';
    constructor(http) {
        this.http = http;
        // ---------- Remote URL
        this.pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    }
    /** GET pokemons from the server */
    getPokemons() {
        const convertToPokemonArray = (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((value) => {
            var objList = value['results'];
            var pokemons = objList.map((pokemon, index) => {
                return new _pokemon__WEBPACK_IMPORTED_MODULE_0__.Pokemon(pokemon.url, pokemon.name);
            });
            return pokemons;
        });
        return convertToPokemonArray(this.http.get(this.pokeapiUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getPokemons', []))));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(operation + ': ' + error); // log to console
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
PokemonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8029:
/*!****************************!*\
  !*** ./src/app/pokemon.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pokemon": function() { return /* binding */ Pokemon; }
/* harmony export */ });
class Pokemon {
    /*
    constructor(url: string, name: string, id: number) {
      this.url = url;
      this.name = name;
      this.id = id;
    }
    */
    constructor(url, name) {
        // Capture the last digits of URL as Pokemon ID
        this.idFromUrlPattern = /^.*\/(\d+)\/$/;
        this.url = url;
        this.name = name;
        var parsedValue = url.replace(this.idFromUrlPattern, "$1");
        this.id = parseInt(parsedValue);
    }
}


/***/ }),

/***/ 5386:
/*!************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonsComponent": function() { return /* binding */ PokemonsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pokemon.service */ 4153);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function PokemonsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poke_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/", poke_r2.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", poke_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](poke_r2.name);
} }
class PokemonsComponent {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
        this.ITEMS_PER_PAGE = 20;
    }
    ngOnInit() {
        this.currentSearch = "";
        this.currentPage = 1;
        this.getPokemons();
    }
    getPokemons() {
        this.pokemonService.getPokemons()
            .subscribe(pokemons => {
            this.pokemonsFull = pokemons;
            this.updateFilteredPokemons();
        });
    }
    updateFilteredPokemons() {
        this.pokemonsFiltered =
            this.pokemonsFull
                .filter((pokemon) => pokemon.name.match(new RegExp(this.currentSearch, 'i')));
        this.updateDisplayedPokemons();
    }
    updateDisplayedPokemons() {
        this.totalPages = Math.ceil(this.pokemonsFiltered.length / this.ITEMS_PER_PAGE);
        if (this.currentPage < 1)
            this.currentPage = 1;
        if (this.currentPage > this.totalPages)
            this.currentPage = this.totalPages;
        this.pokemonsDisplayed =
            this.pokemonsFiltered
                .slice((this.currentPage - 1) * this.ITEMS_PER_PAGE)
                .slice(0, this.ITEMS_PER_PAGE);
    }
    nextPage() {
        this.currentPage = this.currentPage + 1;
        this.updateDisplayedPokemons();
    }
    previousPage() {
        this.currentPage = this.currentPage - 1;
        this.updateDisplayedPokemons();
    }
    search(keyword) {
        this.currentSearch = keyword;
        this.updateFilteredPokemons();
    }
}
PokemonsComponent.ɵfac = function PokemonsComponent_Factory(t) { return new (t || PokemonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pokemon_service__WEBPACK_IMPORTED_MODULE_0__.PokemonService)); };
PokemonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PokemonsComponent, selectors: [["app-pokemons"]], decls: 16, vars: 3, consts: [[1, "container"], [1, "form-control", 2, "text-align", "center"], [1, "input-group"], [1, "input-group-prepend"], [1, "btn", "btn-primary", 3, "click"], ["placeholder", "Enter search term here...", 1, "form-control", 3, "keyup"], ["searchBox", ""], [1, "input-group-append"], [1, "row"], ["class", "col-12 col-md-6 col-xl-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "row", "pokerow"], [1, "col-6", "col-md-12", "col-xl-12"], [3, "src"], [1, "col-12"]], template: function PokemonsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PokemonsComponent_Template_button_click_5_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " <<\u00A0 Prev 20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PokemonsComponent_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PokemonsComponent_Template_button_click_10_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Next 20 \u00A0>> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PokemonsComponent_div_15_Template, 12, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Page ", ctx.currentPage, " / ", ctx.totalPages, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pokemonsDisplayed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".pokerow[_ngcontent-%COMP%] {\n\talign-items: center;\n\ttext-align: center;\n}\n\n.pokerow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tbackground-color: #f0f0f0;\n\tborder-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJwb2tlbW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2Vyb3cge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb2tlcm93IGltZyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map