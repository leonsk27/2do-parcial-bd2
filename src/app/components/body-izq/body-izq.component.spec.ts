import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIzqComponent } from './body-izq.component';

describe('BodyIzqComponent', () => {
  let component: BodyIzqComponent;
  let fixture: ComponentFixture<BodyIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
