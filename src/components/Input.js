import React from 'react'
import {useState} from 'react'
import TipButton from './TipButton'

const Input = ({ changeBill, changePercent, changePeople }) => {
  
  const [temp_bill, setTempBill] = useState('');
  const [temp_percent, setTempPercent] = useState('');
  const [temp_people, setTempPeople] = useState('');
  console.log(temp_bill, temp_percent, temp_people);
  
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
            changeBill(e.target.value)}}/>
        </div>
        <div className="card__form-btns">
            <label>
                Select Tip %
            </label><br/>
            <div className="card__tip-btns">
                <TipButton content="5" changePercent={changePercent} />
                <TipButton content="10" changePercent={changePercent} />
                <TipButton content="15" changePercent={changePercent} />
                <TipButton content="25" changePercent={changePercent} />
                <TipButton content="50" changePercent={changePercent} />
                <input
                className="card__tip-btn card__tip-btn--custom"
                type="text"
                placeholder="Custom"
                value={temp_percent}
                onChange={(e) => {
                    setTempPercent(e.target.value);
                    changePercent(e.target.value);
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
            changePeople(e.target.value)}
            } />
        </div>
    </form>
  )
}

export default Input