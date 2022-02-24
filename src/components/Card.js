import Form from './Form'
import Display from './Display'
import {useState} from 'react'
import React from 'react'


const Card = () => {

  const [tipAmount, setTip] = useState('0.00');
  const [totalAmount, setTotal] = useState('0.00');
  const [enableReset, setEnableReset] = useState(false);
  const [resetCalc, setResetCalc] = useState(false);

  const calculateOutput = (bill, percent, people) => {

    let Nbill = parseFloat(bill);
    let Npercent = Number(percent);
    let Npeople = Number(people);
    
    if (isNaN(Nbill) && isNaN(Npercent) && Npeople === 0) {
      setEnableReset(false);
    } else {
      setEnableReset(true);
    }

    let tipAmt = Nbill * (Npercent / 100) / Npeople;
    let totalAmt = Nbill / Npeople + tipAmt;

    setTip(isNaN(tipAmt.toFixed(2)) || tipAmt.toFixed(2) === 'Infinity' ? '0.00': tipAmt.toFixed(2));
    setTotal(isNaN(totalAmt.toFixed(2)) || totalAmt.toFixed(2) === 'Infinity' ? '0.00': totalAmt.toFixed(2));
  }

  /*
    TO-DO
    1. Reset button
    2. Responsive Design
    3. Toggle buttons
      - When one button = clicked, let all the others go back to normal color
    4. Clean up components
      - Losing track of which variables are for what components
      - Centralize all variables to one component for easy tracking(?)
  */

  return (
    <main
    className="card">
        <Form 
        changeOutput={calculateOutput}
        />
        <Display 
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        enableBtn={enableReset}
        />
    </main>
  )
}

export default Card