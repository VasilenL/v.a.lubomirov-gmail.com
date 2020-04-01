import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesExampleComponent } from './promises-example.component';

describe('PromisesExampleComponent', () => {
  let component: PromisesExampleComponent;
  let fixture: ComponentFixture<PromisesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
