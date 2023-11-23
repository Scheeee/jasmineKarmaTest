import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoslistComponent } from './pedidoslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Pedido } from 'src/app/models/pedido';

describe('PedidoslistComponent', () => {
  let component: PedidoslistComponent;
  let fixture: ComponentFixture<PedidoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PedidoslistComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => { //MOCANDO DADOS
    let produto = new Produto();
    let produtoList: Produto[] = [];
    let pedido = new Pedido();
    let pedidolist: Pedido[] = [];
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;

    produtoList.push(produto);
    pedido.id = 1;
    pedido.obs = "obs";
    pedido.produtos = produtoList;
    pedidolist.push(pedido);

    component.lista = pedidolist;

    fixture.detectChanges(); //refresh
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Listagem de pedidos!');
  });

  it('teste de tabela', () => {
    const compiled = fixture.debugElement.nativeElement;
    const tableRows = compiled.querySelectorAll('table tbody tr');
    expect(tableRows.length).toEqual(component.lista.length);
  });

  it('teste do botão adicionar', () => {
    spyOn(component, 'adicionar');
    const addButton = fixture.debugElement.nativeElement.querySelector('button[name="adicionar"]');
    addButton.click();
    expect(component.adicionar).toHaveBeenCalled();
  });
  

  it('teste do botão editar', () => {
    spyOn(component, 'editar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="editar"]'); 
    editButton.click();
    expect(component.editar).toHaveBeenCalled();
  });
  
  
  
});
