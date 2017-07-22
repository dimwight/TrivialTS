export abstract class SumTwoNums {
  constructor(protected readonly first:number){}
  abstract setSecondNum(second:number):void;
  abstract newOutputText():string;
}
export class Core extends SumTwoNums {
  setSecondNum(second:number):void{
    throw new Error(`Not implemented in ${this.constructor.name}`);
  }
  newOutputText():string{
    throw new Error(`Not implemented in ${this.constructor.name}`);
  }
}
