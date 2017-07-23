import {
  SumTwoNums,
  SumTwoNumsCoupled,
  SumTwoNumsCoupler,
  SumTwoNumsUncoupled,
} from './sums/_export';

let firstNum=1,secondNum=1;
const smallTxt='small',largerTxt='larger',bigTxt='big';

function newNumText(n:number){
  return `${n}(a ${(n<6?smallTxt:n<10?largerTxt:bigTxt)} number)`;
}

if(true){
  const sums=[
    new SumTwoNumsUncoupled(firstNum),
    new SumTwoNumsCoupled(new SumTwoNumsCoupler(++firstNum)),
    new SumTwoNumsCoupled(new class for3 extends SumTwoNumsCoupler{
      lazyFirstNum(){
        return firstNum;
      }
    }()),
    new SumTwoNumsCoupled(new class for4 extends SumTwoNumsCoupler{
      lazyFirstNum(){
        return firstNum;
      }
      newNumText(num:number){
        return newNumText(num);
      }
    }()),
  ];
  function doSum(sum:SumTwoNums){
    sum.setSecondNum(secondNum+=2);
    if(!(sum instanceof SumTwoNumsCoupled))
      console.log(`${sum.newOutputText()}`);
    else ++firstNum;
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
