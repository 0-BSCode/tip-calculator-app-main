import React from 'react'

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
        console.log("Target value: ", e.target.value);
        console.log("People value: ", People);
        if (e.target.value === '0' || typeof People == 'undefined') {
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