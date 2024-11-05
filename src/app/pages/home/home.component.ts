import { Component, Input } from '@angular/core';
import {CardComponent} from "../../component/card/card.component";

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verPerfil(){
    alert('Ver Perfil');
  }

  conocerMas(){
    alert('Conocer Mas');
  }

  conocerlo(){
    alert("Conocerlo");
  }
  goProducts(){
    window.location.href = '/products'
  }
}
