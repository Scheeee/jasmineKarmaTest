import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Login } from 'src/app/models/login';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LoginComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

    let login = new Login();
    
    login.username = 'admin';
    login.password = 'admin';

    component.login = login;
    fixture.detectChanges(); //refresh

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 login', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="loginUser"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 de login', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="loginUser"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 1 password', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="loginPassword"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 password', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="loginPassword"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
});
