import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../component/card/card.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usuarios:Usuario[] =[
  {
    id:1,
    name:"Leonardo",
    description:"Cliente de la app",
    rol:{
      rol:"Cliente"}
  },
  {
    id:1,
    name:"Gael",
    description:"Administrador de la app",
    rol:{
      rol:"Admin"}
  },
];
}
