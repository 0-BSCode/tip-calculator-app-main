import React from 'react'

const BillInput = ({ Bill, getBill }) => {

  return (
    <input
    className="card__form-bill"
    type="text"
    placeholder="0"
    value={Bill}
    onChange={(e) => {
      getBill(e.target.value);
    }}>
    </input>
  )
}

export default BillInput