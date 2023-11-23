import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidosdetailsComponent } from './pedidosdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {  //PREPARA AS DEPENDÊNCIAS INTERNAS PARA O TESTE

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //SE O COMPONENTE INVOCA ALGUM SERVICE, INCLUÍMOS ESSA DEPENDÊNCIA DE HTTP DE TESTE
      declarations: [PedidosdetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ]
    });

    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => { //MOCANDO DADOS
    let produto = new Produto();
    let produtoList: Produto[] = [];
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;

    produtoList.push(produto);
    component.pedido.produtos = produtoList;
    component.pedido.id = 1;
    component.pedido.obs = "obs";
    fixture.detectChanges(); //refresh
  });

  it('should create', () => { //TESTE EM SI - EQUIVALE AO @TEST
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('obs');
  });

  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de tamanho da lista ', () => {
    expect(component.pedido.produtos.length).toEqual(1); 
  });
  it('Teste de elemento na tabela', () => {
    let elementoNaTabela = fixture.debugElement.query(By.css('table tbody tr')); 
    expect(elementoNaTabela).not.toBeNull();
  });
  
 




});


