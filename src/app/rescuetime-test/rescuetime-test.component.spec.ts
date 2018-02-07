import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuetimeTestComponent } from './rescuetime-test.component';

describe('RescuetimeTestComponent', () => {
  let component: RescuetimeTestComponent;
  let fixture: ComponentFixture<RescuetimeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescuetimeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescuetimeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
