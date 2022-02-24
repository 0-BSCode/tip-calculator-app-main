import React from 'react'
import {useState, useEffect} from 'react'
import TipButton from './TipButton'
import Input from './Input'

const Form = ({ changeOutput }) => {
  
  const [bill, setBill] = useState('');
  const [percent, setPercent] = useState('NaN');
  const [percentCustom, setPercentCustom] = useState('');
  const [people, setPeople] = useState('');

  useEffect(()=>{changeOutput(bill, percent, people)});

  return (
    <form
    className="card__form">
        <div className="card__form-section">
            <label>Bill</label>
            <br/>
            <Input 
            className="card__form-bill"
            value={bill}
            changeValue={setBill} />
        </div>
        <div className="card__form-btns">
            <label>Select Tip %</label>
            <br/>
            <div className="card__tip-btns">
                <TipButton content="5" changePercent={setPercent} />
                <TipButton content="10" changePercent={setPercent} />
                <TipButton content="15" changePercent={setPercent} />
                <TipButton content="25" changePercent={setPercent} />
                <TipButton content="50" changePercent={setPercent} />
                <input
                className="card__tip-btn card__tip-btn--custom"
                type="text"
                placeholder="Custom"
                value={percentCustom}
                onChange={(e) => {
                    setPercentCustom(e.target.value === '' ? '': e.target.value);
                    setPercent(e.target.value === '' ? 'NaN': e.target.value);
                }}/>
            </div>
        </div>
        <div className="card__form-section">
            <label>Number of People</label>
            <br/>
            <Input 
            className="card__form-people"
            value={people}
            changeValue={setPeople} 
            checkForZero={true} />
        </div>
    </form>
  )
}

export default Form