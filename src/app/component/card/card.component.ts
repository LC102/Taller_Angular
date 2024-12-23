import { Component, Input, signal } from '@angular/core';
import { Productos, Usuario } from '../../models/test';

type Data = {
  data:Productos |Usuario
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text =signal('');
@Input() data!:Usuario;
@Input() clickEvent!:() => void;

onChange(event:any){
  this.text.set(event.target.value);

  this.data.description= this.text();
}

onClick(){
  console.log(this.data);
  }
}
