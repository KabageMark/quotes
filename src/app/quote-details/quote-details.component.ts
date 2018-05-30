import { Component, OnInit,Input,} from '@angular/core';
import {Quote} from '../quote-form';
import * as $ from "jquery";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // @Input() marks:Quote;
  // mavotes1=[0]
  // mavotes2=[0]
  // upvote(){
  //   this.mavotes1.push(+1) 
  // }
  // downvote(){
  //  this.mavotes2.push (1)
  // }
  constructor() { }

  ngOnInit() {
    var counter = 0;
    $("#plus").click(function(){
      counter ++;
      $("#count").text(counter);
    });
    $("#minus").click(function(){
      counter --;
      $("#count").text(counter);    
    });
    $("#delete").click(function(){
      $(".quoteresults").toggle();    
    });
  }

}
