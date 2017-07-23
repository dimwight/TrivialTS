import * as trivial from './trivial/_export';
let firstNum=1,secondNum=1;
const smallTxt='small',largerTxt='larger',bigTxt='big';

const getFirstNum=()=>firstNum,
  newNumText=(n:number)=>`${n}(a ${(n<6?smallTxt:n<10?largerTxt:bigTxt)} number)`;

if(true){
  const t=trivial,sums=[
    new t.SumTwoNumsUncoupled(getFirstNum()),
    new t.SumTwoNumsCoupled(new t.SumTwoNumsCoupler(getFirstNum())),
    new t.SumTwoNumsCoupled(new t.SumTwoNumsCoupler(undefined,getFirstNum)),
    new t.SumTwoNumsCoupled(new t.SumTwoNumsCoupler(undefined,getFirstNum,newNumText)),
  ];
  function doSum(sum:trivial.SumTwoNums){
    sum.setSecondNum(secondNum+=2);
    if(!(sum instanceof t.SumTwoNumsCoupled))
      console.log(`${sum.newOutputText()}`);
    else firstNum+=1;
  }
  if(false)for(let sum of sums)doSum(sum);
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
