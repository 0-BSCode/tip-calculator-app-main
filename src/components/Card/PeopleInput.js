import React from 'react'
import {useState, useEffect} from 'react'

const PeopleInput = ({ People, getPeople }) => {

  const [value, setValue] = useState('');

  // Rejects if input contains 0 or a string of 0's
  useEffect(()=>{
    const peopleInput = document.querySelector(".card__form-people");
    const errorPar = document.querySelector(".card__form-people-error");
    // People = 0 if input contains nothing or a string of zeroes
    // Additional condition that value has something means it contains a string of zeroes
    if (People == 0 && value != '') {
      peopleInput.classList.add("card__form-people--error");
      errorPar.classList.add("card__form-people-error--show");
    } else {
      peopleInput.classList.remove("card__form-people--error");
      errorPar.classList.remove("card__form-people-error--show");
    }
  });

  return (
    <>
      <input
      className="card__form-people"
      type="text"
      placeholder="0"
      value={People}
      onChange={(e) => {
        getPeople(e.target.value);
        setValue(e.target.value);
      }}>
      </input>
      <p
      className="card__form-people-error">
          Can't be zero
      </p>
    </>

  )
}

export default PeopleInput