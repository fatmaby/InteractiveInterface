import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelabsComponent } from './prelabs.component';

describe('PrelabsComponent', () => {
  let component: PrelabsComponent;
  let fixture: ComponentFixture<PrelabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
