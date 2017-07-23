export abstract class SumTwoNums{
  constructor(protected readonly first:number){
  }
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}

export class SumTwoNumsUncoupled extends SumTwoNums{
  protected second:number=-1;
  setSecondNum(second:number):void{
    const assert=this.second<0;
    if(!assert) throw new Error('Existing second='+this.second);
    else if(false) console.assert(assert);
    else this.second=second;
  }
  firstText(){
    return `${this.first}`;
  }
  secondText(){
    return `${this.second}`;
  };
  sumText(){
    return `${this.first+this.second}`;
  };
  newOutputText():string{
    return `${this.constructor.name}: ${this.firstText()} + `+
      `${this.secondText()} = ${this.sumText()}`
  }
}

interface Coupler{
  first():number;
  lazyFirstNum():number;
  output(text:string):void;
  newNumText(num:number):string;
}

export class SumTwoNumsCoupled extends SumTwoNumsUncoupled{
  constructor(private c:Coupler){
    super(c.first());
  }
  setSecondNum(second:number){
    super.setSecondNum(second);
    this.c.output(this.newOutputText())
  }
  firstText(){
    return this.c.newNumText(this.c.first());
  }
  secondText(){
    return this.c.newNumText(this.second);
  };
  sumText(){
    return this.c.newNumText(this.c.first()+this.second);
  };
}

export class SumTwoNumsCoupler implements Coupler{
  constructor(private firstNum?:number){}
  first(){
    return this.firstNum||this.lazyFirstNum();
  }
  lazyFirstNum():number{
    if(true)throw new Error('Not implemented');
  }
  newNumText(num:number):string{
    return `${num}`;
  }
  output(newSumText:string){
    return console.log(`${newSumText}`);
  }
}

