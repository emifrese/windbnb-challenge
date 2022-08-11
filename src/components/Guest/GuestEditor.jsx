import React from "react";

import classes from "./GuestEditor.module.css";
import GuestToggle from "./GuestToggle";

const GuestEditor = () => {
  return (
    <div className={classes.guestEditor}>
      <GuestToggle type={'Adult'}/>
      <GuestToggle type={'Children'}/>
    </div>
  );
};

export default GuestEditor;
