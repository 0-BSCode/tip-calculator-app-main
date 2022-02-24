import React from 'react'

const Display = ({ tipAmount, totalAmount, enableBtn, resetAll }) => {
  return (
    <div className="card__output">
        <div className="card__amount">
            <p className="card__amount-txt">
                Tip Amount<span>/ person</span>
            </p>
            <p className="card__amount-money">
                ${tipAmount}
            </p>
        </div>
        <div className="card__total">
            <p className="card__total-txt">
                Total<span>/ person</span>
            </p>
            <p className="card__total-money">
                ${totalAmount}
            </p>
        </div>
        {
            enableBtn ? 
            <button className="card__reset card__reset--enabled"
            onClick={(e)=> {
                e.preventDefault();
                resetAll(true);
            }}>
                Reset
            </button> :
            <button className="card__reset card__reset--disabled" disabled>
                Reset
            </button>            
        }

    </div>
  )
}

export default Display