import { Component, Input, signal } from '@angular/core';
import { Productos } from '../../models/test';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text =signal('');
@Input() productos!:Productos;
@Input() clickEvent!:() => void;

onClick(){
  this.clickEvent();
}

}
