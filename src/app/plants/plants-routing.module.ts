import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsPage } from './plants.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlantsPage,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsPageRoutingModule { }
