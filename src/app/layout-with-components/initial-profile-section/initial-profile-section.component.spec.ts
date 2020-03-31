import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialProfileSectionComponent } from './initial-profile-section.component';

describe('InitialProfileSectionComponent', () => {
  let component: InitialProfileSectionComponent;
  let fixture: ComponentFixture<InitialProfileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialProfileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
