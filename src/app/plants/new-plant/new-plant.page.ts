import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlantsService } from '../plants.service';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Plant } from '../plant.model';


interface Category {
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-new-plant',
  templateUrl: './new-plant.page.html',
  styleUrls: ['./new-plant.page.scss'],
})
export class NewPlantPage implements OnInit {
  isLoading = false;
  form: FormGroup;
  categories: Category;
  constructor(private plantsService: PlantsService, private loadCtr: LoadingController, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadCtr.create({ message: 'Pobieram dane..' }).then(alert => {
      alert.present();
      this.plantsService.getCategories().subscribe(
        resp => {
          this.categories = resp;
          alert.dismiss();
        }
      );

    });
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      category: new FormControl(null, {
        updateOn: 'blur'
      }),
      insolation: new FormControl(1, {
        updateOn: 'blur'
      }),
      humidity: new FormControl(1, {
        updateOn: 'blur'
      }),
      temperature: new FormControl(1, {
        updateOn: 'blur'
      }),
      difficulty: new FormControl(1, {
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
}
