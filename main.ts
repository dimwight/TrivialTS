import * as trivial from './Trivial';
let firstNum=1,secondNum=2;
const smallTxt='small',largerTxt='larger',bigTxt='big';

const newNumText=(n:number)=>`${n} (a ${n<6?smallTxt:n<10?largerTxt:bigTxt} number)`,
  firstNumFn=()=>firstNum;

function testNumTexts(){
  const ats=Array(10).fill(0,2,8);
  const logNumText=(n:number)=>console.log(newNumText(n));
  if(true) ats.forEach((_,at)=>logNumText(at*2));
  else for(const [at]of ats.entries())logNumText(at*1.5);
}

if(false) testNumTexts();
else if (false) console.log(`main:
  firstNumFn=${firstNumFn()}
  newNumText(2)=${newNumText(secondNum)}
`);
else{
  let core=new trivial.Core(firstNum);
  core.setSecondNum(secondNum+=2);
  let msg=`${core.newOutputText()}`;
  console.log(msg);
}

