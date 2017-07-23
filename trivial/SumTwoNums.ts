export abstract class SumTwoNums{
  constructor(protected readonly first:number){
  }
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}

export class SumTwoNumsUncoupled extends SumTwoNums{
  second:number;
  setSecondNum(second:number):void{
    this.second=second;
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

type NumText=(n:number)=>string;
type NumValue=()=>number;

interface STNCoupler{
  first():number;
  readonly firstFn:NumValue;
  output(text:string):void;
  numTextFn(num:number):string;
}

export class SumTwoNumsCoupled extends SumTwoNumsUncoupled{
  readonly firstFn:NumValue;
  constructor(private coupler:STNCoupler){
    super(coupler.first());
    this.firstFn=coupler.firstFn;
  }
  setSecondNum(second:number){
    super.setSecondNum(second);
    this.coupler.output(this.newOutputText())
  }
  firstText(){
    return this.coupler.numTextFn(this.firstFn());
  }
  secondText(){
    return this.coupler.numTextFn(this.second);
  };
  sumText(){
    return this.coupler.numTextFn(this.firstFn()+this.second);
  };
}

export class SumTwoNumsCoupler {
  readonly firstFn:NumValue;
  readonly numTextFn:NumText;
  readonly firstNum:number;
  constructor(firstNum:number=-1,numFn?:()=>number,numTextFn=(n:number)=>`${n}`){
    this.firstNum=firstNum;
    this.numTextFn=numTextFn;
    this.firstFn=numFn||(()=>this.firstNum);
  }
  first(){
    return this.firstFn==null?this.firstNum:this.firstFn();
  };
  output(newSumText:string){
    return console.log(`${newSumText}`);
  }
}

