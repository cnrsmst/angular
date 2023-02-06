import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Heroes {

  constructor(

    public id:number,
    public name:string,
    public surnmae:string,
    public nickname:string


  ) {
    
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  heroes: Heroes[] | undefined;
  constructor(
    private httpClient : HttpClient
  ) {

  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){

    this.httpClient.get<any>("http://localhost:3000/heroes").subscribe(


    response => {
      console.log(response);
      this.heroes = response;
    }
    );
  }
}
