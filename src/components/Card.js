import Form from './Form'
import Output from './Output'
import {useState, useEffect} from 'react'
import React from 'react'


const Card = () => {

  const [bill, setBill] = useState('');
  const [percent, setPercent] = useState('NaN');
  const [people, setPeople] = useState('');
  const [tipAmount, setTip] = useState('0.00');
  const [totalAmount, setTotal] = useState('0.00');
  const [enableReset, setEnableReset] = useState(false);
  const [tipSelected, setTipSelected] = useState(6);

  const calculateOutput = () => {

    let Nbill = parseFloat(bill);
    let Npercent = Number(percent);
    let Npeople = Number(people);
    
    if (isNaN(Nbill) && isNaN(Npercent) && Npeople === 0) {
      setEnableReset(false);
    } else {
      setEnableReset(true);
    }

    console.log("People: ", Npeople);

    let tipAmt = Nbill * (Npercent / 100) / Npeople;
    let totalAmt = Nbill / Npeople + tipAmt;

    setTip(isNaN(tipAmt.toFixed(2)) || tipAmt.toFixed(2) === 'Infinity' ? '0.00': tipAmt.toFixed(2));
    setTotal(isNaN(totalAmt.toFixed(2)) || totalAmt.toFixed(2) === 'Infinity' ? '0.00': totalAmt.toFixed(2));
  }

  const resetCalculator = () => {
    setBill('');
    setPercent('NaN');
    setPeople('');
    setTipSelected(6);
  }

  useEffect(()=>{calculateOutput(bill, percent, people)});

  return (
    <main
    className="card">
        <Form 
        Bill={bill}
        getBill={setBill}
        Percent={percent}
        getPercent={setPercent}
        People={people}
        getPeople={setPeople}
        tipNumber={tipSelected}
        getTipNumber={setTipSelected}
        />
        <Output 
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        enableBtn={enableReset}
        reset={resetCalculator}
        />
    </main>
  )
}

export default Card