import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayPage } from './display.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayPage
  },
  {
    path: 'plant-details',
    loadChildren: () => import('./plant-details/plant-details.module').then( m => m.PlantDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayPageRoutingModule {}
