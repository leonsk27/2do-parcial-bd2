import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyInferiorComponent } from './body-inferior.component';

describe('BodyInferiorComponent', () => {
  let component: BodyInferiorComponent;
  let fixture: ComponentFixture<BodyInferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyInferiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
