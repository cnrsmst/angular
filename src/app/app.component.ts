import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Users {

  constructor(

    public id:number,
    public email:string,
    public password:string


  ) {
    
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
 

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  

  users: Users[] | undefined;
  constructor(
    private httpClient : HttpClient
  ) {

   

  }
  
  ngOnInit(): void {
    this.getUsers();
    
    
  }
  create(user:Users){
    this.httpClient.post("http://localhost:3000/users",user).subscribe();
    
     
 }

  getUsers(){

    this.httpClient.get<any>("http://localhost:3000/users").subscribe(


    response => {
      console.log(response);
      this.users = response;
    }
    );
  }
}
