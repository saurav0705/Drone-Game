import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  @Output() childReadyEvent: EventEmitter<string> = new EventEmitter();
  row = [];
  col = [];
  block = []
  start={
   
  }
  end={
  }
  
  funcCount=0;
  
  
  Input(param,param2){
     if(this.funcCount<2){
       this.funcCount++;
    if(this.start.hasOwnProperty('row'))
    {
      console.log('end added');
      this.end={
        'row':param,
        'col':param2
      }
      this.block[this.end['row']][this.end['col']].flag=true;
    }else{
      if(this.end.hasOwnProperty('row')){
        console.log('already selected');
        console.log(this.start +"  "+ this.end);
      }else{
        console.log('start added');
        this.start = {
          'row' : param,
          'col' : param2
        }
        
        this.block[this.start['row']][this.start['col']].flag=true;
      }
    }
    }


  }
  
  algoDown(){
    if(this.funcCount!==2){
      alert('not selected both points yet')
      return ;
    }
    console.log(this.start);
    console.log(this.end);
    while(this.start['row'] <= 7){
      console.log(this.start['row'] + " " + this.start['col']);
      this.block[this.start['row']][this.start['col']].flag=true;
      this.block[this.start['row']][this.start['col']].dir="D";
      this.start['row']=this.start['row']+1;
    }
    this.start['row']=this.start['row']-1;
    if(this.start['col']>this.end['col'])
      {
        while(this.start['col'] > this.end['col']){
          console.log(this.start['row'] + " " + this.start['col']);
          this.block[this.start['row']][this.start['col']].flag=true;
          this.block[this.start['row']][this.start['col']].dir="L";
          this.start['col']=this.start['col']-1;
        }
      }
      else{
        while(this.start['col'] < this.end['col']){
          console.log(this.start['row'] + " " + this.start['col']);
          this.block[this.start['row']][this.start['col']].flag=true;
          this.block[this.start['row']][this.start['col']].dir="R";
          this.start['col']=this.start['col']+1;
        }
      }
      console.log('exited col');
      while(this.start['row'] >= this.end['row']){
        console.log(this.start['row'] + " " + this.start['col']);
        
        console.log("------------",this.block[this.start['row']][this.start['col']].flag)
        this.block[this.start['row']][this.start['col']].flag=true;
        this.block[this.start['row']][this.start['col']].dir="U";
        this.start['row']=this.start['row']-1;
      }
      this.start['row']=this.start['row']+1;

  }


  algoUp(){
    if(this.funcCount!==2){
      alert('not selected both points yet')
      return ;
    }
    console.log(this.start);
    console.log(this.end);
    
      while(this.start['row'] >= 0){
        console.log(this.start['row'] + " " + this.start['col']);
        
        console.log("------------",this.block[this.start['row']][this.start['col']].flag)
        this.block[this.start['row']][this.start['col']].flag=true;
        this.block[this.start['row']][this.start['col']].dir="U";
        this.start['row']=this.start['row']-1;
      }
      this.start['row']=this.start['row']+1;
      
      console.log('exited row');
      if(this.start['col']>this.end['col'])
      {
        while(this.start['col'] > this.end['col']){
          console.log(this.start['row'] + " " + this.start['col']);
          this.block[this.start['row']][this.start['col']].flag=true;
          this.block[this.start['row']][this.start['col']].dir="L";
          this.start['col']=this.start['col']-1;
        }
      }
      else{
        while(this.start['col'] < this.end['col']){
          console.log(this.start['row'] + " " + this.start['col']);
          this.block[this.start['row']][this.start['col']].flag=true;
          this.block[this.start['row']][this.start['col']].dir="R";
          this.start['col']=this.start['col']+1;
        }
      }
      console.log('exited col');

      while(this.start['row'] <= this.end['row']){
        console.log(this.start['row'] + " " + this.start['col']);
        this.block[this.start['row']][this.start['col']].flag=true;
        this.block[this.start['row']][this.start['col']].dir="D";
        this.start['row']=this.start['row']+1;
      }
      this.start['row']=this.start['row']-1;

      
    
  }
  changeColor(flag)
  {
    if(flag)
      return 'white';
    
  }
  resetFull(){
    location.reload();
  }
  reset(){
    for(let i=0;i<8;i++)
    {
      var block2=[];
      for(let j=0;j<9;j++)
      {
        var obj = {
          x:i,
          y:j,
          flag:false,
          dir:"",
        }
        block2.push(obj)
      }
      this.block.push(block2);
    }
    this.start={
   
    }
    this.end={
    }
    this.funcCount=0;
  }
  constructor() { }

  ngOnInit() {
    this.reset();
    
  }

}
