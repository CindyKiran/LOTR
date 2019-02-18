import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDocentComponent } from './login-docent.component';

describe('LoginDocentComponent', () => {
  let component: LoginDocentComponent;
  let fixture: ComponentFixture<LoginDocentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDocentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
