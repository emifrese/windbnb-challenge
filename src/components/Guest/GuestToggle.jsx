import React from 'react'
import { useState } from 'react'

const GuestToggle = ({type}) => {

    const [quantity, setQuantity] = useState(0);

  return (
    <div>
        <h3>{type}</h3>
        <p>Agues 13 or above</p>
        <button>-</button>
        <input value={quantity}/>
        <button>+</button>
    </div>
  )
}

export default GuestToggle