export abstract class SumTwoNums{
  constructor(protected readonly first:number){
  }
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}
export class Core extends SumTwoNums{
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

export class Coupler{
  readonly firstNum:number;
  constructor(firstNum:number){
    this.firstNum=firstNum;
  }
  output=(newSumText:string)=>console.log(`${newSumText}`);
}

export class WithCoupler extends Core{
  constructor(private coupler:Coupler){
    super(coupler.firstNum);
  }
  setSecondNum(second:number){
    super.setSecondNum(second);
    this.coupler.output(this.newOutputText())
  }
  firstText(){
    return super.firstText()+'-c';
  }
  secondText(){
    return super.secondText()+'-c';
  };
  sumText(){
    return super.sumText()+'-c';
  };
}
