(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["display-edit-plant-edit-plant-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/display/edit-plant/edit-plant.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/display/edit-plant/edit-plant.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [defaultHref]=\"'/plants/tabs/display'\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onUpdatePlant()\" [disabled]=\"!form?.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" text-center>\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Nazwa</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"name\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> Wybierz kategorię</ion-label>\n            <ion-select okText=\"Okej\" cancelText=\"Odrzuć\" formControlName=\"category\">\n              <ion-select-option value=\"{{ category.id }}\" *ngFor=\"let category of categories\">{{ category.name }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/plants/display/edit-plant/edit-plant-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/plants/display/edit-plant/edit-plant-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EditPlantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlantPageRoutingModule", function() { return EditPlantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_plant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-plant.page */ "./src/app/plants/display/edit-plant/edit-plant.page.ts");




const routes = [
    {
        path: '',
        component: _edit_plant_page__WEBPACK_IMPORTED_MODULE_3__["EditPlantPage"]
    }
];
let EditPlantPageRoutingModule = class EditPlantPageRoutingModule {
};
EditPlantPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPlantPageRoutingModule);



/***/ }),

/***/ "./src/app/plants/display/edit-plant/edit-plant.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/plants/display/edit-plant/edit-plant.module.ts ***!
  \****************************************************************/
/*! exports provided: EditPlantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlantPageModule", function() { return EditPlantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_plant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-plant-routing.module */ "./src/app/plants/display/edit-plant/edit-plant-routing.module.ts");
/* harmony import */ var _edit_plant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-plant.page */ "./src/app/plants/display/edit-plant/edit-plant.page.ts");







let EditPlantPageModule = class EditPlantPageModule {
};
EditPlantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_plant_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPlantPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_plant_page__WEBPACK_IMPORTED_MODULE_6__["EditPlantPage"]]
    })
], EditPlantPageModule);



/***/ }),

/***/ "./src/app/plants/display/edit-plant/edit-plant.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/plants/display/edit-plant/edit-plant.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9kaXNwbGF5L2VkaXQtcGxhbnQvZWRpdC1wbGFudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/plants/display/edit-plant/edit-plant.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/plants/display/edit-plant/edit-plant.page.ts ***!
  \**************************************************************/
/*! exports provided: EditPlantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlantPage", function() { return EditPlantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _plants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plants.service */ "./src/app/plants/plants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EditPlantPage = class EditPlantPage {
    constructor(route, plantsService, navCtrl, router, loadingCtrl, alertCtrl) {
        this.route = route;
        this.plantsService = plantsService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('plantId')) {
                console.log("back");
                this.navCtrl.navigateBack('/plants/tabs/display');
                return;
            }
            this.plantId = paramMap.get('plantId');
            this.isLoading = true;
            this.plantSubscription = this.plantsService
                .getPlant(paramMap.get('plantId'))
                .subscribe(plant => {
                this.plant = plant.plant;
                this.categories = plant.categories;
                console.log(this.plant);
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.plant.name, {
                        updateOn: 'blur'
                    }),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.plant.category_id, {
                        updateOn: 'blur'
                    })
                });
                this.isLoading = false;
            }, error => {
                this.alertCtrl
                    .create({
                    header: 'Wystąpił błąd!',
                    message: 'Nie można pobrać danych o roślinie.',
                    buttons: [
                        {
                            text: 'Okay',
                            handler: () => {
                                this.router.navigate(['/plants/tabs/display']);
                            }
                        }
                    ]
                })
                    .then(alertEl => {
                    alertEl.present();
                });
            });
        });
    }
    onUpdatePlant() {
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl
            .create({
            message: 'Aktualizuje dane...'
        })
            .then(loadingEl => {
            loadingEl.present();
            this.plantsService
                .updatePlant(this.plant.id, this.form.value.name, this.form.value.category)
                .subscribe(resp => {
                console.log("RESP: " + resp);
                loadingEl.dismiss();
                this.form.reset();
                this.router.navigate(['/plants/tabs/display']);
            });
        });
    }
};
EditPlantPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _plants_service__WEBPACK_IMPORTED_MODULE_3__["PlantsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
EditPlantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-plant',
        template: __webpack_require__(/*! raw-loader!./edit-plant.page.html */ "./node_modules/raw-loader/index.js!./src/app/plants/display/edit-plant/edit-plant.page.html"),
        styles: [__webpack_require__(/*! ./edit-plant.page.scss */ "./src/app/plants/display/edit-plant/edit-plant.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _plants_service__WEBPACK_IMPORTED_MODULE_3__["PlantsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], EditPlantPage);



/***/ })

}]);
//# sourceMappingURL=display-edit-plant-edit-plant-module-es2015.js.map