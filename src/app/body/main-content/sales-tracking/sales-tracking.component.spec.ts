import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrackingComponent } from './sales-tracking.component';

describe('SalesTrackingComponent', () => {
  let component: SalesTrackingComponent;
  let fixture: ComponentFixture<SalesTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
