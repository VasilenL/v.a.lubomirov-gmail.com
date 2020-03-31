import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhotosComponent } from './initial-photos.component';

describe('InitialPhotosComponent', () => {
  let component: InitialPhotosComponent;
  let fixture: ComponentFixture<InitialPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
