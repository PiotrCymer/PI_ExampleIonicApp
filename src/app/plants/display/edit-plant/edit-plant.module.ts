import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPlantPageRoutingModule } from './edit-plant-routing.module';

import { EditPlantPage } from './edit-plant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPlantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditPlantPage]
})
export class EditPlantPageModule {}
