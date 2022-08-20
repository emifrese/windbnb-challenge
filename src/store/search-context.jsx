import React, { useState } from "react";

import { locations } from "../helpers/variables";

const SearchContext = React.createContext({
  guests: { adults: 0, children: 0 },
  place: "",
  showedLocations: [],
  editGuests: ({ adults, children }) => {},
  editPlace: (place) => {},
  filterLocations: (city, country) => {},
});

export const SearchContextProvider = ({ children }) => {
  const [guestInput, setGuestInput] = useState({ adults: 0, children: 0 });

  const [placeInput, setPlaceInput] = useState("");

  const [locationsShow, setLocationsShow] = useState(locations)

  const editGuestsHandler = ({ adults, children }) => {
      setGuestInput((prevState) => {
        if(adults === undefined){
          return { ...prevState, children };
        } else if(children === undefined){
          return {...prevState, adults}
        }
      })
  };

  const editPlaceHandler = (place) => {
    setPlaceInput(place);
  };

  const filterLocationHandler = (city, country) => {
    let showedLocations = [];
    if(city && country){
      for(let location of locations){
        if(location.country === country && location.city === city){
          showedLocations.push(location)
        }
      }
      setLocationsShow(showedLocations)
    }
  }

  const contextValue = {
    guests: guestInput,
    place: placeInput,
    showedLocations: locationsShow,
    editGuests: editGuestsHandler,
    editPlace: editPlaceHandler,
    filterLocationHandler: filterLocationHandler
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
