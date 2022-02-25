import React from 'react'

const Display = ({description, text}) => {
  return (
    <div className="card__money">
        <p className="card__money-description">
            {description}<span>/ person</span>
        </p>
        <p className="card__money-txt">
            ${text}
        </p>        
    </div>
  )
}


export default Display