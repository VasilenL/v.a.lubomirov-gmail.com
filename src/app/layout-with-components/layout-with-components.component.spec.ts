import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithComponentsComponent } from './layout-with-components.component';

describe('LayoutWithComponentsComponent', () => {
  let component: LayoutWithComponentsComponent;
  let fixture: ComponentFixture<LayoutWithComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
