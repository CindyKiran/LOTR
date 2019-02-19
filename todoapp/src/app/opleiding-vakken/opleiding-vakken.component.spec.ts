import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingVakkenComponent } from './opleiding-vakken.component';

describe('OpleidingVakkenComponent', () => {
  let component: OpleidingVakkenComponent;
  let fixture: ComponentFixture<OpleidingVakkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpleidingVakkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpleidingVakkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
