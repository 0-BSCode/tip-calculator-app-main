import Input from './Input'
import Output from './Output'
import {useState} from 'react'
import React from 'react'


const Card = () => {

  const [bill, setBill] = useState('');
  const [percent, setPercent] = useState('');
  const [people, setPeople] = useState('');
  const [tipAmount, setTip] = useState('0.00');
  const [totalAmount, setTotal] = useState('0.00');
  const [updateDisplay, setUpdateStatus] = useState(1);

  const calculateOutput = (bill, percent, people) => {
    console.log("Bill before: ", bill);
    console.log("Percent before: ", percent);
    console.log("People before: ", people);

    let Nbill = parseFloat(bill);
    let Npercent = Number(percent);
    let Npeople = Number(people);

    console.log("Bill: ", Nbill);
    console.log("Percent: ", Npercent);
    console.log("People: ", Npeople);

    let tipAmt = Nbill * (Npercent / 100) / Npeople;
    let totalAmt = Nbill / Npeople + tipAmt;

    setTip(tipAmt.toFixed(2));
    setTotal(totalAmt.toFixed(2));
    // return String(tipAmt.toFixed(2));
  }

  // const calculateTotal = (tip, bill, people) => {
  //   let Nbill = parseFloat(bill);
  //   let Npeople = Number(people);
  //   let Ntip = parseFloat(tip);

  //   let totalAmt = Nbill / Npeople + Ntip;

  //   return String(totalAmt.toFixed(2));
  // }

  // if (bill !== '' && percent !=='' && people !== '' && updateDisplay) {
  //   setTip(()=>calculateTip(bill, percent, people));
  //   setTotal(()=>calculateTotal(tipAmount, bill, people));
  //   setUpdateStatus(0);
  // }

  /*
    TO-DO
    1. Reset button
    2. Responsive Design
    3. Toggle buttons + active states
    4. Prevent immediate execution until user finishes input
      - Problem = the moment bill, select tip, and people states have smthg in them, calculation = performed
      - If I want to have 10 people, execution starts the moment I type in 1
      - Possible solution = update every time smthg gets changed from the input
    5. Clean up components
  */

  return (
    <main
    className="card">
        <Input 
        changeBill={setBill}
        changePercent={setPercent}
        changePeople={setPeople}
        changeOutput={calculateOutput}
        />
        <Output 
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        />
    </main>
  )
}

export default Card