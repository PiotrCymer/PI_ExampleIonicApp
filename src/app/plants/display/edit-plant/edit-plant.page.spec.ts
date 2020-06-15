import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPlantPage } from './edit-plant.page';

describe('EditPlantPage', () => {
  let component: EditPlantPage;
  let fixture: ComponentFixture<EditPlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
