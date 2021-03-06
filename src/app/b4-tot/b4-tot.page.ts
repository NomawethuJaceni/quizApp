import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b4-tot',
  templateUrl: './b4-tot.page.html',
  styleUrls: ['./b4-tot.page.scss'],
})
export class B4TotPage implements OnInit {
  correct: number;
  correct1: number;
  correct2: number;
  correct3: number;
  correct4: number;
  final: number;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     this.correct = params.correct,
     this.correct1 = params.correct1,
     this.correct2 = params.correct2,
     this.correct3 = params.correct3,
     this.final=params.final;
    console.log( this.correct,this.correct1, this.correct2,this.correct3)

 
  });
  }
  GoTo4(){
    this.final=+this.correct + + this.correct1 + + this.correct2 + + this.correct3 + + this.correct4;
    console.log(this.correct,this.correct1,this.correct2,this.correct3,this.correct4);
    this.router.navigate(['/b4-tot'], { queryParams: {correct:this.correct, correct1:this.correct1,correct2:this.correct2,correct3:this.correct3,correct4:this.correct4,final:this.final} });
  }
  click1(){
    if(this.correct4  += 0){
      
    }
  }
  click2(){
    if(this.correct4  += 0){
      
    }
  }
  click3(){
    if(this.correct4  += 1){
      
    }
  } 
  click4(){
    if(this.correct4  += 0){
      
    }
  }

  GoToN()
  {
    this.router.navigateByUrl("correctb");
  }

}
