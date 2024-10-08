import { Component } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
