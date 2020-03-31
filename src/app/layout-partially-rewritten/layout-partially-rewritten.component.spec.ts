import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPartiallyRewrittenComponent } from './layout-partially-rewritten.component';

describe('LayoutPartiallyRewrittenComponent', () => {
  let component: LayoutPartiallyRewrittenComponent;
  let fixture: ComponentFixture<LayoutPartiallyRewrittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPartiallyRewrittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPartiallyRewrittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
