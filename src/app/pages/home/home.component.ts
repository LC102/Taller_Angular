import { Component, NgModule } from '@angular/core';
import {CardComponent} from "../../component/card/card.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email:string = '';
  password:string='';
    

    login(user:string, password:string){
      /*if(user === '1=1' || password === '1=1'){
          return false;
      }*/

      document.getElementById('email');
      console.log(`User,${user},Password: ${password}`);

    }
    
}
