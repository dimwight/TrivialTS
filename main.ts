import * as trivial from './trivial/_export';

let firstNum=1,secondNum=1;
const smallTxt='small',largerTxt='larger',bigTxt='big';

const getFirstNum=()=>firstNum,
  newNumText=(n:number)=>`${n}(a ${(n<6?smallTxt:n<10?largerTxt:bigTxt)} number)`;

if(true){
  const dartStyle=false;
  console.log('dartStyle='+dartStyle);
  const coupler1=!dartStyle?new class coupler1 extends trivial.SumTwoNumsCoupler2{
    firstFn(){
      return getFirstNum();
    }
  }:new trivial.SumTwoNumsCoupler1(firstNum);
  const coupler2=!dartStyle?new class coupler2 extends trivial.SumTwoNumsCoupler2{
    firstFn(){
      return firstNum;
    }
  }:new trivial.SumTwoNumsCoupler1(undefined,getFirstNum);
  const coupler3=!dartStyle?new class coupler3 extends trivial.SumTwoNumsCoupler2{
    first(){
      return firstNum;
    }
    firstFn(){
      return getFirstNum();
    }
    numTextFn(num:number){
      return newNumText(num);
    }
  }:new trivial.SumTwoNumsCoupler1(undefined,getFirstNum,newNumText);
  const sums=[
    new trivial.SumTwoNumsUncoupled(getFirstNum()),
    new trivial.SumTwoNumsCoupled(coupler1),
    new trivial.SumTwoNumsCoupled(coupler2),
    new trivial.SumTwoNumsCoupled(coupler3),
  ];
  function doSum(sum:any){
    sum.setSecondNum(secondNum+=2);
    if(!(sum instanceof trivial.SumTwoNumsCoupled))
      console.log(`${sum.newOutputText()}`);
    else firstNum+=1;
  }
  if(false) for(const sum of sums) doSum(sum);
  else sums.forEach((sum)=>doSum(sum));
}
else if(true){
  const logNumText=(n:number)=>console.log(newNumText(n));
  const ats=Array(10).fill(0,2,8);
  if(true) ats.forEach((_,at)=>logNumText(at*2));
  else for(const [at]of ats.entries()) logNumText(at*1.5);
}
else console.log(`main:
  getFirstNum()=${getFirstNum()}
  newNumText(10)=${newNumText(10)}
`);
