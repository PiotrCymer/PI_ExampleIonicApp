(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["display-display-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/display/display.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/display/display.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Plants (display) 12:22</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n      <ion-item-sliding *ngFor=\"let plant of plants\" #slidingItem>\n        <app-single-plant [plant]=\"plant\" (titleClick)=\"t($event)\"></app-single-plant>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"onEdit(plant.id, slidingItem);\">\n            <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/display/single-plant/single-plant.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/display/single-plant/single-plant.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item (click)=\"showDetails(plant.id)\">\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"plant.img | repairImg\" />\n  </ion-thumbnail>\n  <ion-label>\n    <h1 (click)=\"onTitleClick()\">{{ plant.name }}</h1>\n    <div class=\"offer-details\">\n      <ion-text color=\"tertiary\" class=\"space-left\">Kategoria: {{ plant.category_name }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>"

/***/ }),

/***/ "./src/app/plants/display/display-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/plants/display/display-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: DisplayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPageRoutingModule", function() { return DisplayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _display_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.page */ "./src/app/plants/display/display.page.ts");




const routes = [
    {
        path: '',
        component: _display_page__WEBPACK_IMPORTED_MODULE_3__["DisplayPage"]
    },
    {
        path: 'plant-details',
        loadChildren: () => __webpack_require__.e(/*! import() | plant-details-plant-details-module */ "common").then(__webpack_require__.bind(null, /*! ./plant-details/plant-details.module */ "./src/app/plants/display/plant-details/plant-details.module.ts")).then(m => m.PlantDetailsPageModule)
    }
];
let DisplayPageRoutingModule = class DisplayPageRoutingModule {
};
DisplayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisplayPageRoutingModule);



/***/ }),

/***/ "./src/app/plants/display/display.module.ts":
/*!**************************************************!*\
  !*** ./src/app/plants/display/display.module.ts ***!
  \**************************************************/
/*! exports provided: DisplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPageModule", function() { return DisplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _display_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-routing.module */ "./src/app/plants/display/display-routing.module.ts");
/* harmony import */ var _display_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display.page */ "./src/app/plants/display/display.page.ts");
/* harmony import */ var _single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-plant/single-plant.component */ "./src/app/plants/display/single-plant/single-plant.component.ts");
/* harmony import */ var src_app_repair_img_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/repair-img.pipe */ "./src/app/repair-img.pipe.ts");









let DisplayPageModule = class DisplayPageModule {
};
DisplayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _display_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisplayPageRoutingModule"]
        ],
        declarations: [_display_page__WEBPACK_IMPORTED_MODULE_6__["DisplayPage"], _single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_7__["SinglePlantComponent"], src_app_repair_img_pipe__WEBPACK_IMPORTED_MODULE_8__["RepairImgPipe"]]
    })
], DisplayPageModule);



/***/ }),

/***/ "./src/app/plants/display/display.page.scss":
/*!**************************************************!*\
  !*** ./src/app/plants/display/display.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9kaXNwbGF5L2Rpc3BsYXkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plants/display/display.page.ts":
/*!************************************************!*\
  !*** ./src/app/plants/display/display.page.ts ***!
  \************************************************/
/*! exports provided: DisplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPage", function() { return DisplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _plants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plants.service */ "./src/app/plants/plants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DisplayPage = class DisplayPage {
    constructor(plantsService, router) {
        this.plantsService = plantsService;
        this.router = router;
    }
    ngOnInit() {
        this.plantsSubscription = this.plantsService.getPlants().subscribe(resp => {
            this.plants = resp;
        });
    }
    onEdit(plantId, slidingItem) {
        slidingItem.close();
        this.router.navigate(['/', 'plants', 'tabs', 'display', 'edit', plantId]);
    }
    doRefresh(event) {
        this.plantsService.getPlants().subscribe(resp => {
            this.plants = resp;
        });
        event.target.complete();
    }
    t($event) {
        alert($event);
    }
    ngOnDestroy() {
        if (this.plantsSubscription)
            this.plantsSubscription.unsubscribe();
    }
};
DisplayPage.ctorParameters = () => [
    { type: _plants_service__WEBPACK_IMPORTED_MODULE_2__["PlantsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DisplayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: __webpack_require__(/*! raw-loader!./display.page.html */ "./node_modules/raw-loader/index.js!./src/app/plants/display/display.page.html"),
        styles: [__webpack_require__(/*! ./display.page.scss */ "./src/app/plants/display/display.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_plants_service__WEBPACK_IMPORTED_MODULE_2__["PlantsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DisplayPage);



/***/ }),

/***/ "./src/app/plants/display/single-plant/single-plant.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/plants/display/single-plant/single-plant.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9kaXNwbGF5L3NpbmdsZS1wbGFudC9zaW5nbGUtcGxhbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/plants/display/single-plant/single-plant.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plants/display/single-plant/single-plant.component.ts ***!
  \***********************************************************************/
/*! exports provided: SinglePlantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePlantComponent", function() { return SinglePlantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _plant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plant.model */ "./src/app/plants/plant.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SinglePlantComponent = class SinglePlantComponent {
    constructor(router) {
        this.router = router;
        this.titleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    showDetails(plantId) {
        console.log("Details" + plantId);
        this.router.navigate(['/', 'plants', 'tabs', 'display', plantId]);
    }
    onTitleClick() {
        this.titleClick.emit(this.plant.name);
    }
};
SinglePlantComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _plant_model__WEBPACK_IMPORTED_MODULE_2__["Plant"])
], SinglePlantComponent.prototype, "plant", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SinglePlantComponent.prototype, "titleClick", void 0);
SinglePlantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-plant',
        template: __webpack_require__(/*! raw-loader!./single-plant.component.html */ "./node_modules/raw-loader/index.js!./src/app/plants/display/single-plant/single-plant.component.html"),
        styles: [__webpack_require__(/*! ./single-plant.component.scss */ "./src/app/plants/display/single-plant/single-plant.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SinglePlantComponent);



/***/ }),

/***/ "./src/app/repair-img.pipe.ts":
/*!************************************!*\
  !*** ./src/app/repair-img.pipe.ts ***!
  \************************************/
/*! exports provided: RepairImgPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairImgPipe", function() { return RepairImgPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RepairImgPipe = class RepairImgPipe {
    transform(value, ...args) {
        if (!value) {
            return value;
        }
        return "http://projekt.dev.cymer.pl/assets" + value;
    }
};
RepairImgPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'repairImg'
    })
], RepairImgPipe);



/***/ })

}]);
//# sourceMappingURL=display-display-module-es2015.js.map