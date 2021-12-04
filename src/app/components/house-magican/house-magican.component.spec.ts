import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HouseMagicanComponent } from './house-magican.component';

describe('HouseMagicanComponent', () => {
  let component: HouseMagicanComponent;
  let fixture: ComponentFixture<HouseMagicanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseMagicanComponent],
      imports: [ReactiveFormsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseMagicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
