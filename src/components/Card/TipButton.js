import React from 'react'

const TipButton = ({id, content, getPercent,
                    tipNumber, getTipNumber}) => {

  return (
    <button
    className={id === tipNumber ? "card__tip-btn card__tip-btn--clicked": "card__tip-btn"}
    onClick={(e)=> {
      e.preventDefault();
      getPercent(content);
      getTipNumber(id);
    }}>
        {content}%
    </button>
  )
}

export default TipButton