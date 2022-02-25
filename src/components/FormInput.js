import React from 'react'
import BillInput from './BillInput'
import PeopleInput from './PeopleInput'

const FormInput = ({content, forBill, value, getValue}) => {
  return (
    <div className="card__form-input">
        <label>{content}</label>
        <br />
        {
            forBill?
            <BillInput Bill={value} getBill={getValue} />:
            <PeopleInput People={value} getPeople={getValue} />
        }
    </div>
  )
}

export default FormInput