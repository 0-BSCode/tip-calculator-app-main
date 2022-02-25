import React from 'react'
import {useState, useEffect} from 'react'

const PeopleInput = ({ People, getPeople }) => {

  const [value, setValue] = useState('');

  useEffect(()=>{
    console.log("People: ", People);
    console.log("Value: ", value);
    const peopleInput = document.querySelector(".card__form-people");
    const errorPar = document.querySelector(".card__form-people-error");
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