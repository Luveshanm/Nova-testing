import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser/src/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let comp;

  beforeEach(async(() => {
    comp = fixture.componentInstance;
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should notify in console on form submission', () => { 
    spyOn(console, 'log');

    comp.SampleFormComponent.controls['login_email'].setValue('temp@gmail.com');
    comp.SampleFormComponent.controls['login_password'].setValue('password');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();
  });
});
