import React from 'react'
import {useState, useEffect} from 'react'
import TipButton from './TipButton'

const Input = ({ changeBill, changePercent, changePeople, changeOutput }) => {
  
  const [temp_bill, setTempBill] = useState('');
  const [temp_percent, setTempPercent] = useState('');
  const [temp_percentCustom, setTempPercentCustom] = useState('');
  const [temp_people, setTempPeople] = useState('');
  const [tipAmount, setTip] = useState('0.00');
  const [totalAmount, setTotal] = useState('0.00');

//   const changeOutput = (bill, percent, people) => {
//     console.log("Bill before: ", bill);
//     console.log("Percent before: ", percent);
//     console.log("People before: ", people);

//     let Nbill = parseFloat(bill);
//     let Npercent = Number(percent);
//     let Npeople = Number(people);

//     console.log("Bill: ", Nbill);
//     console.log("Percent: ", Npercent);
//     console.log("People: ", Npeople);

//     let tipAmt = Nbill * (Npercent / 100) / Npeople;
//     let totalAmt = Nbill / Npeople + tipAmt;

//     setTip(tipAmt.toFixed(2));
//     setTotal(totalAmt.toFixed(2));
//     // return String(tipAmt.toFixed(2));
//   }
//   console.log(temp_bill, temp_percent, temp_people);

//   function calculateOutput() {
    
//     changeTip(temp_bill, temp_percent, temp_people);
//     changeTotal()

//   }
  useEffect(()=>{changeOutput(temp_bill, temp_percent, temp_people)});

  return (
    <form
    className="card__form">
        <div className="card__form-text">
            <label>
                Bill
            </label><br/>
            <input
            className="card__form-bill"
            type="text"
            placeholder="0"
            value={temp_bill}
            onChange={(e) => 
            {/* setTempBill changes temp_bill to display in input
                changeBill passes string in input to parent component*/
            setTempBill(e.target.value);
            // changeBill(e.target.value);
            }}/>
        </div>
        <div className="card__form-btns">
            <label>
                Select Tip %
            </label><br/>
            <div className="card__tip-btns">
                {/* <TipButton content="5" changePercent={changePercent} />
                <TipButton content="10" changePercent={changePercent} />
                <TipButton content="15" changePercent={changePercent} />
                <TipButton content="25" changePercent={changePercent} />
                <TipButton content="50" changePercent={changePercent} /> */}
                <button
                className="card__tip-btn"
                onClick={(e)=> {
                e.preventDefault();
                setTempPercent('5');
                // changePercent('5');
                changeOutput(temp_bill, temp_percent, temp_people);
                }}>
                    5%
                </button>               
                <button
                className="card__tip-btn"
                onClick={(e)=> {
                e.preventDefault();
                setTempPercent('10');
                // changePercent('10');
                changeOutput(temp_bill, temp_percent, temp_people);
                }}>
                    10%
                </button>        
                <button
                className="card__tip-btn"
                onClick={(e)=> {
                e.preventDefault();
                setTempPercent('15');
                // changePercent('15');
                changeOutput(temp_bill, temp_percent, temp_people);
                }}>
                    15%
                </button>        
                <button
                className="card__tip-btn"
                onClick={(e)=> {
                e.preventDefault();
                setTempPercent('25');
                // changePercent('25');
                changeOutput(temp_bill, temp_percent, temp_people);
                }}>
                    25%
                </button>        
                <button
                className="card__tip-btn"
                onClick={(e)=> {
                e.preventDefault();
                setTempPercent('50');
                // changePercent('50');
                changeOutput(temp_bill, temp_percent, temp_people);
                }}>
                    50%
                </button>             
                <input
                className="card__tip-btn card__tip-btn--custom"
                type="text"
                placeholder="Custom"
                value={temp_percentCustom}
                onChange={(e) => {
                    setTempPercentCustom(e.target.value);
                    // changePercent(e.target.value);
                    changeOutput(temp_bill, temp_percentCustom, temp_people);
                }}/>
            </div>
        </div>
        <div className="card__form-text">
            <label>
                Number of People
            </label><br/>
            <input
            className="card__form-people"
            type="text"
            placeholder="0"
            value={temp_people}
            onChange={(e) => 
            {setTempPeople(e.target.value); 
            // changePeople(e.target.value);
            changeOutput(temp_bill, temp_percent, temp_people)}
            } />
        </div>
    </form>
  )
}

export default Input