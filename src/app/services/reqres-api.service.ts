import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {
  private body(data:any){
    return JSON.stringify(data);
  }

  private header(){
    return {
      headers:{
      'Content-Type':'application/json'
      }
    }
  }

  private url(endpoint:string){
    return`https://reqres.in/api/${endpoint}`
  }
  constructor(private http:HttpClient) { }

  public Login(user:string, password:string){
    return this.http.post<any>(
      this.url('login'),
      this.body({
        email:user,
        password
      }),
      this.header()
    )
  }
}
