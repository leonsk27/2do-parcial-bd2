import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMedioComponent } from './body-medio.component';

describe('BodyMedioComponent', () => {
  let component: BodyMedioComponent;
  let fixture: ComponentFixture<BodyMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
