import React, { useState } from "react";
import Header from "../components/Header/Header";
import Locations from "../components/Locations/Locations";
import Modal from "../components/UI/Modal";
import WindbnbPageWrapper from "../components/UI/WindbnbPageWrapper";

const WindbnbPage = () => {
  const [filterModal, setFilterModal] = useState(false);

  const toggleModal = () => {
    setFilterModal((state) => !state);
  };

  return (
    <>
      {filterModal && <Modal toggle={toggleModal} />}
      <WindbnbPageWrapper>
        <Header toggle={toggleModal} />
        <Locations />
      </WindbnbPageWrapper>
    </>
  );
};

export default WindbnbPage;
