import React from 'react'

const TipButton = ({content, changePercent}) => {

  return (
    <button
    className="card__tip-btn"
    onClick={(e)=> {
      e.preventDefault();
      changePercent(content);
    }}>
        {content}%
    </button>
  )
}

export default TipButton