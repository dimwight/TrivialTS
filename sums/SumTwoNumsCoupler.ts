import {Coupler} from './Coupler';

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

