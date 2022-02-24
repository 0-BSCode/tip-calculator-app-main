import React from 'react'
import {useState} from 'react'

const PeopleInput = ({ People, getPeople }) => {

  return (
    <>
      <input
      className="card__form-people"
      type="text"
      placeholder="0"
      value={People}
      onChange={(e) => {
        getPeople(e.target.value);
        if (e.target.value === '0') {
          e.target.classList.add("card__form-people--error");
        } else {
          e.target.classList.remove("card__form-people--error");
        }
      }}>
      </input>

      {
        People === '0' ? 
        <p
        className="card__form-people-error">
            Can't be zero
        </p>: ''
      }
    </>

  )
}

export default PeopleInput