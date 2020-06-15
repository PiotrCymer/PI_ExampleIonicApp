import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPlantPage } from './new-plant.page';

describe('NewPlantPage', () => {
  let component: NewPlantPage;
  let fixture: ComponentFixture<NewPlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
