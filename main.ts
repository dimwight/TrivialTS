import * as trivial from './trivial/_export';
let firstNum=1,secondNum=1;
const smallTxt='small',largerTxt='larger',bigTxt='big';

const newNumText=(n:number)=>`${n} (a ${n<6?smallTxt:n<10?largerTxt:bigTxt} number)`,
  firstNumFn=()=>firstNum;

function testNumTexts(){
  const ats=Array(10).fill(0,2,8);
  const logNumText=(n:number)=>console.log(newNumText(n));
  if(true) ats.forEach((_,at)=>logNumText(at*2));
  else for(const [at]of ats.entries()) logNumText(at*1.5);
}
const getNumber=new trivial.Coupler(firstNum),
  getNumFn=new trivial.Coupler(firstNum),
  getTextsFn=new trivial.Coupler(firstNum);

if(true){
  const output=function(sum:trivial.SumTwoNums){
    sum.setSecondNum(secondNum+=2);
    if(!(sum instanceof trivial.WithCoupler))
      console.log(`${sum.newOutputText()}`);
    else firstNum+=1;
  }
  const core=new trivial.Core(firstNum),
    coupledNumbers=new trivial.WithCoupler(getNumber),
    coupledNumbersFn=new trivial.WithCoupler(getNumFn),
    coupledTexts=new trivial.WithCoupler(getTextsFn);
  [
    core,
    coupledNumbers,
    coupledNumbersFn,
    coupledTexts,
  ].forEach((sum)=>output(sum));
}
else if(false)testNumTexts();
else console.log(`main:
  firstNumFn=${firstNumFn()}
  newNumText(1)=${newNumText(secondNum)}
`);
