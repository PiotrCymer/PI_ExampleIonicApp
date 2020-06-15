(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-plant-new-plant-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/new-plant/new-plant.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/new-plant/new-plant.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Dodaj nową roślinę</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Nazwa</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"name\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Opis</ion-label>\n            <ion-input type=\"text\" autocorrect formControlName=\"description\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> Wybierz kategorię</ion-label>\n            <ion-select okText=\"Okej\" cancelText=\"Odrzuć\" formControlName=\"category\">\n              <ion-select-option value=\"{{ category.id }}\" *ngFor=\"let category of categories\">{{ category.name }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Nasłoneczenie</ion-label>\n            <ion-input type=\"number\" min=\"1\" max=\"3\" formControlName=\"insolation\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Wilgotność</ion-label>\n            <ion-input type=\"number\" min=\"1\" max=\"3\" formControlName=\"humidity\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Temperatura</ion-label>\n            <ion-input type=\"number\" min=\"1\" max=\"3\" formControlName=\"temperature\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Trudność hodowli</ion-label>\n            <ion-input type=\"number\" min=\"1\" max=\"3\" formControlName=\"difficulty\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n        <ion-button expand=\"block\" (click)=\"onAddPlant()\" [disabled]=\"!form.valid\">Dodaj</ion-button>\n     \n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/plants/new-plant/new-plant-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/plants/new-plant/new-plant-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: NewPlantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlantPageRoutingModule", function() { return NewPlantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_plant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-plant.page */ "./src/app/plants/new-plant/new-plant.page.ts");




const routes = [
    {
        path: '',
        component: _new_plant_page__WEBPACK_IMPORTED_MODULE_3__["NewPlantPage"]
    }
];
let NewPlantPageRoutingModule = class NewPlantPageRoutingModule {
};
NewPlantPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPlantPageRoutingModule);



/***/ }),

/***/ "./src/app/plants/new-plant/new-plant.module.ts":
/*!******************************************************!*\
  !*** ./src/app/plants/new-plant/new-plant.module.ts ***!
  \******************************************************/
/*! exports provided: NewPlantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlantPageModule", function() { return NewPlantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_plant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-plant-routing.module */ "./src/app/plants/new-plant/new-plant-routing.module.ts");
/* harmony import */ var _new_plant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-plant.page */ "./src/app/plants/new-plant/new-plant.page.ts");







let NewPlantPageModule = class NewPlantPageModule {
};
NewPlantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_plant_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPlantPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_new_plant_page__WEBPACK_IMPORTED_MODULE_6__["NewPlantPage"]]
    })
], NewPlantPageModule);



/***/ }),

/***/ "./src/app/plants/new-plant/new-plant.page.scss":
/*!******************************************************!*\
  !*** ./src/app/plants/new-plant/new-plant.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9uZXctcGxhbnQvbmV3LXBsYW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/plants/new-plant/new-plant.page.ts":
/*!****************************************************!*\
  !*** ./src/app/plants/new-plant/new-plant.page.ts ***!
  \****************************************************/
/*! exports provided: NewPlantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlantPage", function() { return NewPlantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _plants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plants.service */ "./src/app/plants/plants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NewPlantPage = class NewPlantPage {
    constructor(plantsService, loadCtr, router) {
        this.plantsService = plantsService;
        this.loadCtr = loadCtr;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.loadCtr.create({ message: 'Pobieram dane..' }).then(alert => {
            alert.present();
            this.plantsService.getCategories().subscribe(resp => {
                this.categories = resp;
                alert.dismiss();
            });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur'
            }),
            insolation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, {
                updateOn: 'blur'
            }),
            humidity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, {
                updateOn: 'blur'
            }),
            temperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, {
                updateOn: 'blur'
            }),
            difficulty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, {
                updateOn: 'blur'
            })
        });
        this.isLoading = false;
    }
    onAddPlant() {
        this.loadCtr.create({ message: "Dodawanie rośliny" }).then(alert => {
            alert.present();
            this.plantsService.addPlant(this.form.value.name, this.form.value.description, this.form.value.category, this.form.value.insolation, this.form.value.humidity, this.form.value.temperature, this.form.value.difficulty).subscribe(resp => {
                this.form.reset();
                alert.dismiss();
                this.router.navigate(['/plants/tabs/display']);
            });
        });
    }
};
NewPlantPage.ctorParameters = () => [
    { type: _plants_service__WEBPACK_IMPORTED_MODULE_3__["PlantsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NewPlantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-plant',
        template: __webpack_require__(/*! raw-loader!./new-plant.page.html */ "./node_modules/raw-loader/index.js!./src/app/plants/new-plant/new-plant.page.html"),
        styles: [__webpack_require__(/*! ./new-plant.page.scss */ "./src/app/plants/new-plant/new-plant.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_plants_service__WEBPACK_IMPORTED_MODULE_3__["PlantsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], NewPlantPage);



/***/ })

}]);
//# sourceMappingURL=new-plant-new-plant-module-es2015.js.map