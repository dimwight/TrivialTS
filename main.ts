import * as trivial from './trivial/_export';
let firstNum=1,secondNum=1;
const smallTxt='small',largerTxt='larger',bigTxt='big';

const newNumText=(n:number)=>`${n} (a ${n<6?smallTxt:n<10?largerTxt:bigTxt} number)`,
  firstNumFn=()=>firstNum;

const numTextFn=function(n:number):string{
  const size=n<6?smallTxt:n<10?largerTxt:bigTxt;
  return `${n} (a ${size} number)`;
}
function testNumTexts(){
  const ats=Array(10).fill(0,2,8);
  const logNumText=(n:number)=>console.log(newNumText(n));
  if(true) ats.forEach((_,at)=>logNumText(at*2));
  else for(const [at]of ats.entries()) logNumText(at*1.5);
}
let x=new class extends trivial.SumTwoNumsCoupler{

}
const getNumber=new trivial.SumTwoNumsCoupler(firstNumFn()),
  getNumFn=new trivial.SumTwoNumsCoupler(undefined,firstNumFn),
  getTextsFn=new trivial.SumTwoNumsCoupler(undefined,firstNumFn,numTextFn);

if(true){
  const output=function(sum:trivial.SumTwoNums){
    sum.setSecondNum(secondNum+=2);
    if(!(sum instanceof trivial.SumTwoNumsCoupled))
      console.log(`${sum.newOutputText()}`);
    else firstNum+=1;
  }

  const uncoupled=new trivial.SumTwoNumsUncoupled(firstNum),
    coupledNumber=new trivial.SumTwoNumsCoupled(getNumber),
    coupledNumberFn=new trivial.SumTwoNumsCoupled(getNumFn),
    coupledTexts=new trivial.SumTwoNumsCoupled(getTextsFn);
  [
    uncoupled,
    coupledNumber,
    coupledNumberFn,
    coupledTexts,
  ].forEach((sum)=>output(sum));
}
else if(false) testNumTexts();
else console.log(`main:
  firstNumFn=${firstNumFn()}
  newNumText(1)=${newNumText(secondNum)}
`);
