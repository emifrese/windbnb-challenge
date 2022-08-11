import React, { useState } from "react";
import FilterModal from "../components/Filter/FilterModal";
import GuestEditor from "../components/Guest/GuestEditor";
import Header from "../components/Header/Header";
import LocationList from "../components/Locations/LocationList";
import Locations from "../components/Locations/Locations";
import FilterModalWrapper from "../components/UI/FilterModalWrapper";
import LocationListWrapper from "../components/UI/LocationListWrapper";
import Modal from "../components/UI/Modal";
import WindbnbPageWrapper from "../components/UI/WindbnbPageWrapper";

const WindbnbPage = () => {
  const [filterModal, setFilterModal] = useState(false);

  const toggleModal = () => {
    setFilterModal((state) => !state);
  };

  return (
    <>
      {filterModal && (
        <Modal toggle={toggleModal}>
          <FilterModalWrapper>
            <FilterModal />
            <LocationListWrapper>
              <LocationList/>
              <GuestEditor/>
            </LocationListWrapper>
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
