import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Plant } from '../plant.model';
import { Subscription } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit, OnDestroy {
  plants: Plant[];
  private plantsSubscription: Subscription;

  constructor(private plantsService: PlantsService, private router: Router) { }

  ngOnInit() {
    this.plantsSubscription = this.plantsService.getPlants().subscribe(resp => {
      this.plants = resp;
    });
  }
  onEdit(plantId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'plants', 'tabs', 'display', 'edit', plantId]);
  }
  doRefresh(event)
  {
    this.plantsService.getPlants().subscribe(resp => {
      this.plants = resp;
    });
    event.target.complete();
  }

  t($event) {
    alert($event);
  }
 

  ngOnDestroy() {
    if(this.plantsSubscription)
        this.plantsSubscription.unsubscribe();
  }


}
