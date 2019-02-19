import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentRegisterComponent } from './docent-register.component';

describe('DocentRegisterComponent', () => {
  let component: DocentRegisterComponent;
  let fixture: ComponentFixture<DocentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
