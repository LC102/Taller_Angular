import { Component } from '@angular/core';
import { Productos } from '../../models/test';
import { CardComponent } from '../../component/card/card.component';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos: Productos[] = [
    {
      name:'Taquito',
      description:'Es un perro amigable ',
      price:0.0,
      img:'/images/product.jpg',
    },
    {
      name:'Frijol',
      description:'Perro agresivo',
      price:0.0,
      img:'/images/product_dog.jpg',
    },
    {
      name:'El sindi',
      description:'Perro sonriente',
      price:0.0,
      img:'/images/dog_pro.jpg',
    },
  ];
}
