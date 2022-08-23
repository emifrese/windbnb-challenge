import React, { useContext } from "react";

import classes from "./ResetButton.module.css";

import resetImg from "../../assets/restart_alt_FILL0_wght400_GRAD0_opsz48.svg";
import SearchContext from "../../store/search-context";
import { locations } from "../../helpers/variables";

const ResetButton = () => {
  const searchCtx = useContext(SearchContext);

  return (
    <>
      {searchCtx.showedLocations.length < locations.length && (
        <figure className={classes.resetButton}>
          <img
            src={resetImg}
            alt="reset-button"
            onClick={() => searchCtx.filterLocations("Restart")}
          />
        </figure>
      )}
    </>
  );
};

export default ResetButton;
