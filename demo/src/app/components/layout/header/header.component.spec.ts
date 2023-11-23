import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Login } from 'src/app/models/login';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],      
      declarations: [HeaderComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isUser', () => {
    spyOn(component, 'isUser').and.returnValue(true);
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-link').length).toBeGreaterThan(1); 
  });
  it('isAdmin', () => {
    spyOn(component, 'isAdmin').and.returnValue(true);
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-link').length).toBeGreaterThan(1); 
  });
  
  
  
});
