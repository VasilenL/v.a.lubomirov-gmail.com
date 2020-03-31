import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialHighlightsComponent } from './initial-highlights.component';

describe('InitialHighlightsComponent', () => {
  let component: InitialHighlightsComponent;
  let fixture: ComponentFixture<InitialHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
