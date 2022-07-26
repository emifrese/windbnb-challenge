import ReactDOM from "react-dom";

import classes from './Modal.module.css'

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal}>
        <>{props.children}</>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({toggle, children}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={toggle} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
