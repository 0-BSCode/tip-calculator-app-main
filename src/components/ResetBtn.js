import React from 'react'

const ResetBtn = ({disabled, reset}) => {
  return (
    <button
    className={`card__reset ${disabled ? "card__reset--disabled": "card__reset--enabled"}`}
    disabled={disabled}
    onClick={(e) => {
        e.preventDefault();
        reset();
    }}>
        Reset
    </button>
  )
}

ResetBtn.defaultProps = {
    disabled: true
}
export default ResetBtn