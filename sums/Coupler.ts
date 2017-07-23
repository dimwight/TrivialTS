export interface Coupler{
  first():number;
  lazyFirstNum():number;
  output(text:string):void;
  newNumText(num:number):string;
}

