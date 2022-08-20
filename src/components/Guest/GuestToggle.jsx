import React, { useContext } from "react";
import { useState } from "react";
import SearchContext from "../../store/search-context";

import classes from "./GuestToggle.module.css";

const GuestToggle = ({ type }) => {
  const [quantity, setQuantity] = useState(0);

  const searchCtx = useContext(SearchContext);

  const inputValue = type === "Adult" ? searchCtx.guests.adults : searchCtx.guests.children;

  return (
    <div className={classes.guestToggle}>
      <h3>{type}</h3>
      <p>{type === "Adult" ? "Ages 13 or above" : "Ages 2-12"}</p>
      <div className={classes.inputContainer}>
        <button
          onClick={() =>
            setQuantity((prevState) => {
              if (prevState > 0) {
                if (type === "Adult") {
                  searchCtx.editGuests({ adults: prevState - 1 });
                } else {
                  searchCtx.editGuests({ children: prevState - 1 });
                }
                return prevState - 1;
              } else {
                return prevState;
              }
            })
          }
        >
          -
        </button>
        <input value={inputValue} />
        <button
          onClick={() =>
            setQuantity((prevState) => {
              if (type === "Adult") {
                searchCtx.editGuests({ adults: prevState + 1 });
              } else {
                searchCtx.editGuests({ children: prevState + 1 });
              }
              return prevState + 1;
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestToggle;
