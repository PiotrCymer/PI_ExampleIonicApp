import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPlantPage } from './edit-plant.page';

const routes: Routes = [
  {
    path: '',
    component: EditPlantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPlantPageRoutingModule {}
