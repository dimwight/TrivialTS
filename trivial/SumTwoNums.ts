export abstract class SumTwoNums{
  constructor(protected readonly first:number){
  }
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}
export class Core extends SumTwoNums{
  private second:number;
  setSecondNum(second:number):void{
    this.second=second;
  }
  firstText=()=>`${this.first}`;
  secondText=()=> `${this.second}`;
  sumText=()=>`${this.first+this.second}`;
  newOutputText():string{
    return ` ${this.constructor.name}: ${this.firstText()} + `+
     `${this.secondText()} = ${this.sumText()}`
  }
}
