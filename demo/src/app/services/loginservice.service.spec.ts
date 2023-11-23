import { TestBed } from '@angular/core/testing';
import { LoginService } from './loginservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import * as jwtDecodeModule from 'jwt-decode';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    service = TestBed.inject(LoginService);

    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('teste logar', () => {
    const loginMock = { username: 'testuser', password: 'testpassword' };
    spyOn(service['http'], 'post').and.callThrough();
    service.logar(loginMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, loginMock);
  });
  it('teste deslogar', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.deslogar().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API + '/deslogar');
  });
  it('teste token', () => {
    const token = 'testtoken';
    service.addToken(token);
    expect(localStorage.getItem('token')).toEqual(token);
    const testToken = service.getToken();
    expect(testToken).toEqual(token);
    service.removerToken();
    expect(localStorage.getItem('token')).toBeNull();
  });
  
 it('teste hasPermission', () => {

  const role = 'ADMIN';
    service.hasPermission(role);
    expect(service.hasPermission(role)).toBeTrue;
  const roleErro = 'AMD'
  service.hasPermission(role);
  expect(service.hasPermission(role)).toBeFalse;

 });
});


  

