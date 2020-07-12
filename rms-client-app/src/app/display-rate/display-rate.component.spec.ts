import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRateComponent } from './display-rate.component';

describe('DisplayRateComponent', () => {
  let component: DisplayRateComponent;
  let fixture: ComponentFixture<DisplayRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
