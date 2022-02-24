import React from 'react'
import {useState} from 'react'

const PercentInput = ({ Percent, getPercent }) => {

  return (
    <input
    className="card__tip-btn card__tip-btn--custom"
    type="text"
    placeholder="Custom"
    value={isNaN(Percent) ? '': Percent}
    onChange={(e) => {
        getPercent(e.target.value);
    }}
    >
    </input>
  )
}

export default PercentInput