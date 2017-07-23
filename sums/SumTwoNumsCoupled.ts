import {SumTwoNumsUncoupled} from './SumTwoNumsUncoupled';
import {Coupler} from './Coupler';

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

