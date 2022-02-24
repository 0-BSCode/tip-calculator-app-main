import React from 'react'

const Output = ({ tipAmount, totalAmount }) => {
  return (
    <div className="card__output">
        <div className="card__amount">
            <p className="card__amount-txt">
                Tip Amount<span>/ person</span>
            </p>
            <p className="card__amount-money">
                {/* $0.00 */}
                ${tipAmount}
            </p>
        </div>
        <div className="card__total">
            <p className="card__total-txt">
                Total<span>/ person</span>
            </p>
            <p className="card__total-money">
                {/* $0.00 */}
                ${totalAmount}
            </p>
        </div>
        <button className="card__reset">
            Reset
        </button>
    </div>
  )
}

export default Output