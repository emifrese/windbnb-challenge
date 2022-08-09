import React, { useState } from "react";
import FilterModal from "../components/Filter/FilterModal";
import Header from "../components/Header/Header";
import Locations from "../components/Locations/Locations";
import FilterModalWrapper from "../components/UI/FilterModalWrapper";
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
