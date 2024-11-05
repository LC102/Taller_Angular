import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() image!:string;
@Input() title!:string;
@Input() info!:string;
@Input() text_btn!:string;
@Input() clickEvent!:() => void;

onClick(){
  this.clickEvent();
}

}
