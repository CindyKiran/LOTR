import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VakInschrijvingComponent } from './vak-inschrijving.component';

describe('VakInschrijvingComponent', () => {
  let component: VakInschrijvingComponent;
  let fixture: ComponentFixture<VakInschrijvingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VakInschrijvingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VakInschrijvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
