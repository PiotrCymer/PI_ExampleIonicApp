import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../plant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-plant',
  templateUrl: './single-plant.component.html',
  styleUrls: ['./single-plant.component.scss'],
})
export class SinglePlantComponent implements OnInit {
  @Input() plant: Plant;
  @Output() titleClick = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() { }

  showDetails(plantId) {
    console.log("Details" + plantId);
    this.router.navigate(['/', 'plants', 'tabs', 'display', plantId]);

  }
  onTitleClick() {
    this.titleClick.emit(this.plant.name);
  }
}
