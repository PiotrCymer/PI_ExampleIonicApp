(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plants-plants-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/plants.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/plants.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"display\">\n      <ion-label>Rośliny</ion-label>\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"new-plant\">\n      <ion-label>Dodaj roślinę</ion-label>\n      <ion-icon name=\"card\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/plants/plants-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/plants/plants-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlantsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPageRoutingModule", function() { return PlantsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _plants_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plants.page */ "./src/app/plants/plants.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _plants_page__WEBPACK_IMPORTED_MODULE_3__["PlantsPage"],
        children: [
            {
                path: 'display',
                children: [
                    {
                        path: '',
                        loadChildren: './display/display.module#DisplayPageModule'
                    },
                    {
                        path: ':plantId',
                        loadChildren: './display/plant-details/plant-details.module#PlantDetailsPageModule'
                    },
                    {
                        path: 'edit/:plantId',
                        loadChildren: './display/edit-plant/edit-plant.module#EditPlantPageModule'
                    }
                ]
            },
            {
                path: 'new-plant',
                loadChildren: './new-plant/new-plant.module#NewPlantPageModule'
            },
            {
                path: '',
                redirectTo: '/plants/tabs/display',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/plants/tabs/display',
        pathMatch: 'full'
    }
];
let PlantsPageRoutingModule = class PlantsPageRoutingModule {
};
PlantsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlantsPageRoutingModule);



/***/ }),

/***/ "./src/app/plants/plants.module.ts":
/*!*****************************************!*\
  !*** ./src/app/plants/plants.module.ts ***!
  \*****************************************/
/*! exports provided: PlantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPageModule", function() { return PlantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plants_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plants-routing.module */ "./src/app/plants/plants-routing.module.ts");
/* harmony import */ var _plants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plants.page */ "./src/app/plants/plants.page.ts");







let PlantsPageModule = class PlantsPageModule {
};
PlantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plants_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlantsPageRoutingModule"]
        ],
        declarations: [_plants_page__WEBPACK_IMPORTED_MODULE_6__["PlantsPage"]]
    })
], PlantsPageModule);



/***/ }),

/***/ "./src/app/plants/plants.page.scss":
/*!*****************************************!*\
  !*** ./src/app/plants/plants.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9wbGFudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plants/plants.page.ts":
/*!***************************************!*\
  !*** ./src/app/plants/plants.page.ts ***!
  \***************************************/
/*! exports provided: PlantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPage", function() { return PlantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlantsPage = class PlantsPage {
    constructor() { }
    ngOnInit() {
    }
};
PlantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plants',
        template: __webpack_require__(/*! raw-loader!./plants.page.html */ "./node_modules/raw-loader/index.js!./src/app/plants/plants.page.html"),
        styles: [__webpack_require__(/*! ./plants.page.scss */ "./src/app/plants/plants.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlantsPage);



/***/ })

}]);
//# sourceMappingURL=plants-plants-module-es2015.js.map