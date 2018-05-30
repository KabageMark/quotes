import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote-form';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuote = new Quote("","","",0,0);
   newQuote2 = [] 
   additem(){
     this.newQuote2.push(this.newQuote)
     
   }
  constructor() {}

  ngOnInit() {
  }

}
