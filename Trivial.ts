export abstract class SumTwoNums {
  constructor(protected readonly first:number){}
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}
export class Core extends SumTwoNums {
  setSecondNum(second:number):void{
  }
  newOutputText():string{
    return undefined;
  }
}
