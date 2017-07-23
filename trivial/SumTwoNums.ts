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
  firstFn():number;
  output(text:string):void;
  numTextFn(num:number):string;
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
    return this.c.numTextFn(this.c.first());
  }
  secondText(){
    return this.c.numTextFn(this.second);
  };
  sumText(){
    return this.c.numTextFn(this.c.firstFn()+this.second);
  };
}

export abstract class SumTwoNumsCoupler2 implements Coupler{
  first(){
    return -1;
  }
  abstract firstFn():number;
  numTextFn(num:number):string{
    return `${num}`;
  }
  output(newSumText:string){
    return console.log(`${newSumText}`);
  }
}

type NumText=(n:number)=>string;
type NumValue=()=>number;
export class SumTwoNumsCoupler1{
  readonly firstFn:NumValue;
  readonly numTextFn:NumText;
  readonly firstNum:number;
  constructor(firstNum:number=-1,numFn?:()=>number,numTextFn=(n:number)=>`${n}`){
    this.firstNum=firstNum;
    this.numTextFn=numTextFn;
    this.firstFn=numFn||(()=>this.firstNum);
  }
  first():number{
    if(false) throw new Error('Not implemented');
    return this.firstFn==null?this.firstNum:this.firstFn();
  }
  output(newSumText:string){
    return console.log(`${newSumText}`);
  }
}

