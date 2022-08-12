import React from "react";
import { useState } from "react";

import classes from "./GuestToggle.module.css";

const GuestToggle = ({ type }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={classes.guestToggle}>
      <h3>{type}</h3>
      <p>{type === "Adult" ? "Ages 13 or above" : "Ages 2-12"}</p>
      <div className={classes.inputContainer}>
        <button
          onClick={() =>
            setQuantity((prevState) => {
              if (prevState > 0) {
                return prevState - 1;
              } else {
                return prevState;
              }
            })
          }
        >
          -
        </button>
        <input value={quantity} />
        <button
          onClick={() =>
            setQuantity((prevState) => prevState + 1)
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestToggle;
