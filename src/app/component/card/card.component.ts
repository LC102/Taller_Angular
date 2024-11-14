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
@Input() data!: Data;
@Input() clickEvent!:() => void;

onChange(event:any){
  this.text.set(event.target.value);
<<<<<<< HEAD
  this.data.data.description= this.text();
}

onClick(){
  console.log(this.data.data);
=======
  this.productos.description = this.text();
}
onClick(){
  console.log(this.productos);
>>>>>>> f60548ab053e3f95ae393bd24e8d81b7bf044c6d
}

}
