import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.page.html',
  styleUrls: ['./s2.page.scss'],
})
export class S2Page implements OnInit {

  correct: number;
  correct1: number;
  correct2: number=0;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
  console.log(params);
  this.correct = params.correct,
  this.correct1 = params.correct1,

 console.log( this.correct,this.correct1)


  });
  }
  GoTo3(){
    console.log(this.correct,this.correct1,this.correct2);
    this.router.navigate(['/s3'], { queryParams: {correct:this.correct, correct1:this.correct1,correct2:this.correct2} });
  }
  click1(){
    if(this.correct2  += 0){
      
    }
  }
  click2(){
    if(this.correct2  += 0){
      
    }
  }
  click3(){
    if(this.correct2  += 1){
      
    }
  } 
  click4(){
    if(this.correct2  += 0){
      
    }
  }
}
