import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../../plant.model';
import { Subscription } from 'rxjs';
import { PlantsService } from '../../plants.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.page.html',
  styleUrls: ['./plant-details.page.scss'],
})
export class PlantDetailsPage implements OnInit, OnDestroy {
  isLoading = false;
  plant: Plant;
  plantId: any;
  private plantSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private plantService: PlantsService, private loadCtr: LoadingController) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadCtr.create({ message: 'Pobieram dane..' }).then(alert => {
      alert.present();
      this.route.paramMap.subscribe(paramMap => {
        if (!paramMap.has('plantId')) {
          this.router.navigateByUrl('/plants/tabs/display');
          return;
        }
        this.plantId = paramMap.get('plantId');
        this.plantSubscription = this.plantService.getPlant(this.plantId).subscribe(
          resp => {
            this.plant = resp.plant;
            this.plant.img = "http://projekt.dev.cymer.pl/assets" + this.plant.img;
            this.isLoading = false;
            alert.dismiss();
          }
        );
      });
    });

  }

  ngOnDestroy() {
    if (this.plantSubscription)
      this.plantSubscription.unsubscribe();
  }
}
