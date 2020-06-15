import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantsService } from '../../plants.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Plant } from '../../plant.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.page.html',
  styleUrls: ['./edit-plant.page.scss'],
})
export class EditPlantPage implements OnInit {
  plant: Plant;
  plantId: string;
  form: FormGroup;
  categories: String[];
  isLoading = false;
  private plantSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private plantsService: PlantsService,
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

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
        .subscribe(
          plant => {
            this.plant = plant.plant;
            this.categories = plant.categories;
            console.log(this.plant);
            this.form = new FormGroup({
              name: new FormControl(this.plant.name, {
                updateOn: 'blur'
              }),
              category: new FormControl(this.plant.category_id, {
                updateOn: 'blur'
              })
            });
            this.isLoading = false;
          },
          error => {
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
          }
        );
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
          .updatePlant(
            this.plant.id,
            this.form.value.name,
            this.form.value.category
          )
          .subscribe(resp => {
            console.log("RESP: "+resp);
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/plants/tabs/display']);
          });
      });
  }

}
