import React from 'react'

const PercentInput = ({ id, Percent, getPercent,
                        tipNumber, getTipNumber }) => {

  return (
    <input
    className="card__tip-btn card__tip-btn--custom"
    type="text"
    placeholder="Custom"
    value={isNaN(Percent) || id !== tipNumber ? '': Percent}
    onChange={(e) => {
        getTipNumber(6);
        getPercent(e.target.value === '' ? 'NaN': e.target.value);
    }}
    >
    </input>
  )
}

export default PercentInput