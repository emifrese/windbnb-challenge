import React, { useEffect, useState } from "react";
import FilterModal from "../components/Filter/FilterModal";
import GuestEditor from "../components/Guest/GuestEditor";
import Header from "../components/Header/Header";
import LocationList from "../components/Locations/LocationList";
import Locations from "../components/Locations/Locations";
import FilterModalWrapper from "../components/UI/FilterModalWrapper";
import LocationListWrapper from "../components/UI/LocationListWrapper";
import Modal from "../components/UI/Modal";
import SearchButton from "../components/UI/SearchButton";
import WindbnbPageWrapper from "../components/UI/WindbnbPageWrapper";

const WindbnbPage = () => {
  const [filterModal, setFilterModal] = useState(false);

  const [focusInput, setFocusInput] = useState("Location");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 375) {
      setIsMobile((prevState) => {
        if (!prevState) {
          return true;
        } else {
          return prevState;
        }
      });
    } else {
      setIsMobile((prevState) => {
        if (prevState) {
          return false;
        } else {
          return prevState;
        }
      });
    }
  }, []);

  const toggleModal = () => {
    setFilterModal((state) => !state);
  };

  const toggleInput = (input) => {
    setFocusInput(input);
  };

  const content =
    focusInput === "Location" ? <LocationList /> : <GuestEditor />;

  return (
    <>
      {filterModal && (
        <Modal toggle={toggleModal}>
          <FilterModalWrapper>
            <FilterModal
              focusInput={focusInput}
              setFocusInput={toggleInput}
              isMobile={isMobile}
            />
            <LocationListWrapper>
              {!isMobile ? (
                <>
                  <LocationList />
                  <GuestEditor />
                </>
              ) : (
                content
              )}
            </LocationListWrapper>
            <SearchButton/>
          </FilterModalWrapper>
        </Modal>
      )}
      <WindbnbPageWrapper>
        <Header toggle={toggleModal} />
        <Locations />
      </WindbnbPageWrapper>
    </>
  );
};

export default WindbnbPage;
