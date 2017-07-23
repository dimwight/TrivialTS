import {SumTwoNums} from './SumTwoNums'
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

