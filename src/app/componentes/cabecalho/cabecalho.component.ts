import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

  toggleMenu() {
    var menu = document.getElementById('user-menu');
    if(menu!=null)menu.classList.toggle('hidden');
  }

}
