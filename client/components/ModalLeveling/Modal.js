import React from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "1.5rem",
  zIndex: 1000,
  borderRadius: "25px",
};

const overlayStyles = {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, .5)",
  zIndex: 1000,
};

const modalButtonStyles = {
  padding: "0.5rem",
  marginTop: "1rem",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "25px",
  fontSize: "0.8rem",
  border: "none",
  height: "2rem",
  width: "5rem",
  fontWeight: "600",
  backgroundColor: "#D9D9D9",
  color: "#708298",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.01)",
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyles}>
        <div style={modalStyles}>
          {children}
          <button onClick={onClose} style={modalButtonStyles}>
            Got it!
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
