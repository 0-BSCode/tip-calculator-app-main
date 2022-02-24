import React from 'react'

const TipButton = ({content, changePercent}) => {

  return (
    <button
    className="card__tip-btn"
    onClick={(e)=> {
      e.preventDefault();
      changePercent(content);
      e.target.classList.toggle("card__tip-btn--clicked");
    }}>
        {content}%
    </button>
  )
}

export default TipButton