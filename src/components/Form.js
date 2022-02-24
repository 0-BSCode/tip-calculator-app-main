import React from 'react'
import {useState, useEffect} from 'react'
import TipButton from './TipButton'
import PeopleInput from './PeopleInput'
import BillInput from './BillInput'
import PercentInput from './PercentInput'

const Form = ({ Bill, getBill, 
                Percent, getPercent, 
                People, getPeople,
                tipNumber, getTipNumber }) => {

  return (
    <form
    className="card__form">
        <div className="card__form-section">
            <label>Bill</label>
            <br/>
            <BillInput Bill={Bill} getBill={getBill} />
        </div>
        <div className="card__form-btns">
            <label>Select Tip %</label>
            <br/>
            <div className="card__tip-btns">
                <TipButton id={1} content="5" getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
                <TipButton id={2} content="10" getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
                <TipButton id={3} content="15" getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
                <TipButton id={4} content="25" getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
                <TipButton id={5} content="50" getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
                <PercentInput id={6} Percent={Percent} getPercent={getPercent} tipNumber={tipNumber} getTipNumber={getTipNumber}/>
            </div>
        </div>
        <div className="card__form-section">
            <label>Number of People</label>
            <br/>
            <PeopleInput People={People} getPeople={getPeople} />
        </div>
    </form>
  )
}

export default Form