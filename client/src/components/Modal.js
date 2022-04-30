import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Welcome to the resume builder </h1>
          <h2><b>please follow the instructions for building resume</b></h2>

          <div className="message">
          <h3><b> *  First please fillup profile details </b> </h3>
          <h3><b> *select any template from home downlod cv</b> </h3>
          
          </div>
         
        </div>
        <div className="body">
           
        
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;