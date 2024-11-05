import { Component } from '@angular/core';
interface Productos{
  name:string,
  description:string,
  price:number,
  img:string,
}


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos: Productos[] = [
    {
      name:'Taquito',
      description:'Es un perro amigable ',
      price:0.0,
      img:'',
    },
    {
      name:'Frijol',
      description:'Perro agresivo',
      price:0.0,
      img:'',
    },
    {
      name:'El sindi',
      description:'Perro sonriente',
      price:0.0,
      img:'',
    },
  ];
}
