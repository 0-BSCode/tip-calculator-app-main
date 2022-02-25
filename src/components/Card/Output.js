import React from 'react'
import Display from './Display'
import ResetBtn from './ResetBtn'

const Output = ({ tipAmount, totalAmount, enableBtn, reset }) => {
  
  return (
    <div className="card__output">
        <Display description={"Tip Amount"} text={tipAmount} />
        <Display description={"Total"} text={totalAmount} />
        {
            enableBtn ?
            <ResetBtn disabled={false} reset={reset} />:
            <ResetBtn reset={reset} />
        }
    </div>
  )
}

export default Output