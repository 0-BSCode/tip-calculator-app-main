import React from 'react'

const Input = ({className, value, changeValue, checkForZero}) => {
  return (
    <>
      <input
      className={className}
      type="text"
      placeholder="0"
      value={value}
      onChange={(e) => {
          changeValue(e.target.value);
          if (checkForZero && e.target.value === '0') {
            e.target.classList.add(className + "--error");
          } else {
            e.target.classList.remove(className + "--error");
          }
      }}></input>

      {
        value === '0' && checkForZero ?
        <p
        className="card__form-people-error">
            Can't be zero
        </p>: ''
      }    
    </>

  )
}

Input.defaultProps = {
  checkForZero: false
}

export default Input