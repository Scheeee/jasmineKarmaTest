import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProdutosdetailsComponent } from './produtosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Produto } from 'src/app/models/produto';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProdutosdetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  beforeEach(() => { //MOCANDO DADOS
    let produto = new Produto();
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;
    component.produto = produto;
    fixture.detectChanges(); //refresh
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Pizza');
  });

  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  
  beforeEach(() => { //MOCANDO DADOS
    let produto = new Produto();
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;

    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(produto));
    spyOn(httpSpy, 'put').and.returnValue(of(produto));

    fixture.detectChanges(); //refresh
  });


  it('Teste de @Output() retorno', fakeAsync(() => {
    //let elemento = fixture.debugElement.query(By.css('button[name="botao"]'));
    spyOn(component.retorno, 'emit');
    //elemento.triggerEventHandler('click', null);
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('salvar com erro', () => {
    spyOn(component.retorno, 'emit');
    spyOn(component['produtosService'], 'save').and.returnValue(throwError('erro'));
    component.salvar();
  
    expect(component.retorno.emit).not.toHaveBeenCalled();
  });

  it('erro', fakeAsync(() => {
    spyOn(window, 'alert');
    spyOn(component['produtosService'], 'save').and.returnValue(throwError('erro'));

    component.salvar();
    tick(); 

    expect(window.alert).toHaveBeenCalledWith('Exemplo de tratamento de erro/exception! Observe o erro no console!');
   
  }));
  

});