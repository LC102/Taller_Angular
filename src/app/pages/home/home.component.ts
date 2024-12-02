import { Component, NgModule } from '@angular/core';
import {CardComponent} from "../../component/card/card.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReqresApiService } from '../../services/reqres-api.service';
import { subscribe } from 'diagnostics_channel';

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

  constructor(private apiReqres:ReqresApiService){

  }
    

    login(user:string, password:string){
      /*if(user === '1=1' || password === '1=1'){
          return false;
      }*/

      document.getElementById('email');
      console.log(`User,${user},Password: ${password}`);

      this.apiReqres.Login(user, password).subscribe(
        res =>  {
          console.log("Login succesfully");
          console.log(res.token);
        },
        err => {
          console.error(err);
        }
      )
    }
    
}
