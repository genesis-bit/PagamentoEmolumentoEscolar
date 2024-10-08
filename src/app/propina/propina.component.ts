import { Component } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { ListaPagamentoComponent } from '../componentes/lista-pagamento/lista-pagamento.component';
import { MenuUserComponent } from '../componentes/menu-user/menu-user.component';

@Component({
  selector: 'app-propina',
  standalone: true,
  imports: [CabecalhoComponent, ListaPagamentoComponent, MenuUserComponent],
  templateUrl: './propina.component.html',
  styleUrl: './propina.component.css'
})
export class PropinaComponent {

}
