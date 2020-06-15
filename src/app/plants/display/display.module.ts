import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPageRoutingModule } from './display-routing.module';

import { DisplayPage } from './display.page';
import { SinglePlantComponent } from './single-plant/single-plant.component';
import { RepairImgPipe } from 'src/app/repair-img.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPageRoutingModule
  ],
  declarations: [DisplayPage, SinglePlantComponent, RepairImgPipe]
})
export class DisplayPageModule {}
