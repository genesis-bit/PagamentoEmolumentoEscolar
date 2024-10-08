import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPagamentoComponent } from './lista-pagamento.component';

describe('ListaPagamentoComponent', () => {
  let component: ListaPagamentoComponent;
  let fixture: ComponentFixture<ListaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPagamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
