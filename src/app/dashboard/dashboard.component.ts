import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Quote } from '../models/quote';

import 'rxjs/add/operator/toPromise';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Services
// import { StockService } from './../services/stock.service';

// Firebase Authentification

@Component({ selector : 'my-app',
             templateUrl: './dashboard.component.html',
             styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
 
  ///////////////
  // Variables //
  ///////////////
  quotes : Quote[] = [new Quote("test", "The most important thing is to have the spirit and the guts to never give up!"), new Quote("test", "Test 2")];
  activeQuote : Quote = this.quotes[0];
  counter : number = 0;

  //////////////////
  // Constructors //
  //////////////////
  
  constructor(

    // private stockService : StockService,
    private router : Router

  ){}

  selectNextQuote(){

    if(this.counter < this.quotes.length - 1){
      this.counter = this.counter + 1;
    }
    
    this.activeQuote = this.quotes[this.counter];

  }

  selectPreviousQuote(){

    if(this.counter > 0){
      this.counter = this.counter - 1;
    }

    this.activeQuote = this.quotes[this.counter];

  }
}



