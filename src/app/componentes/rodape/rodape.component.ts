import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MenuUserComponent } from '../menu-user/menu-user.component';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CabecalhoComponent, MenuUserComponent],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
