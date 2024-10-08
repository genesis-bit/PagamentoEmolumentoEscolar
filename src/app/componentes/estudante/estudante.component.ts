import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-estudante',
  standalone: true,
  imports: [NgIf],
  templateUrl: './estudante.component.html',
  styleUrl: './estudante.component.css'
})
export class EstudanteComponent {
  @Input() estudante: any;
  @Input() showDetalhe: boolean = true;

}
