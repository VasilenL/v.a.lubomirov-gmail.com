import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountInstagramComponent } from './discount-instagram.component';

describe('DiscountInstagramComponent', () => {
  let component: DiscountInstagramComponent;
  let fixture: ComponentFixture<DiscountInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
