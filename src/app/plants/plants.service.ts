import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Plant } from './plant.model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

interface Category {
  id: number,
  name: string,
  image: string
}

interface PlantResponseData {
  id: number,
  name: string,
  img: string,
  description: string,
  category_id: number,
  insolation: number,
  humidity: number,
  temperature: number,
  difficulty: number,
  category_name: string
}

@Injectable({
  providedIn: 'root'
})

export class PlantsService {
  private _plants = new BehaviorSubject<Plant[]>([]);
  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get<PlantResponseData>('http://projekt.dev.cymer.pl/api/getplants')
      .pipe(
        map(resp => {
          const plants = [];
          for (const key in resp) {
            if (resp.hasOwnProperty(key)) {
              plants.push(
                new Plant(
                  resp[key].id,
                  resp[key].name,
                  resp[key].img,
                  resp[key].description,
                  resp[key].category_id,
                  resp[key].insolation,
                  resp[key].humidity,
                  resp[key].temperature,
                  resp[key].difficulty,
                  resp[key].category_name
                )
              );
            }
          }
          return plants;
        }), tap(plants => {
          this._plants.next(plants);
        }));
  }

  getPlant(id) {
    return this.http.get<Plant>(`http://projekt.dev.cymer.pl/api/getsingleplant?plantId=${id}`).pipe(
      map(resp => {
        return {
          plant: new Plant(
            resp['plant'].id,
            resp['plant'].name,
            resp['plant'].img,
            resp['plant'].description,
            resp['plant'].category_id,
            resp['plant'].insolation,
            resp['plant'].humidity,
            resp['plant'].temperature,
            resp['plant'].difficulty,
            resp['plant'].category_name
          ),
          categories: resp['categories']
        }
      }));
  }

  updatePlant(id: any, name: string, category_id: number, ) {
    console.log("Update");
    return this.http.get(`http://projekt.dev.cymer.pl/api/updateplant?plantId=${id}&name=${name}&categoryId=${category_id}`);
  }

  getCategories() {
    return this.http.get<Category>('http://projekt.dev.cymer.pl/api/getcategories');
  }

  addPlant(name: string, description: string, category_id: number, insolation: number, humidity: number, temperature: number, difficulty: number) {
    console.log(`http://projekt.dev.cymer.pl/api/addplant?name=${name}&description=${description}&categoryId=${category_id}&insolation=${insolation}&humidity=${humidity}&temperature=${temperature}&difficulty=${difficulty}`);
    return this.http.get(`http://projekt.dev.cymer.pl/api/addplant?name=${name}&description=${description}&categoryId=${category_id}&insolation=${insolation}&humidity=${humidity}&temperature=${temperature}&difficulty=${difficulty}`);
  }
}
