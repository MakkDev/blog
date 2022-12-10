import React from "react";
import "./imageModal.css";

export default function ImageModal({ onClick, imageSource }) {
  return (
    <div className="modal" onClick={onClick}>
      <span className="close-button" onClick={onClick}>
        &times;
      </span>
      <img className="modal-image" onClick={onClick} src={imageSource} />
    </div>
  );
}
