import React, { Fragment, useState } from "react";
import "./ImageModal.scss";

interface ImageModalProps {
  modalContent: React.ReactNode;
  children: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalContent, children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Fragment>
      <div className={`overlay ${showModal ? "visible" : "hidden"}`}>
        <div className="close" onClick={() => setShowModal(false)}>
          ✕
        </div>
        <div className="modal">
          <div className="container">{modalContent}</div>
        </div>
      </div>
      <div className="source" onClick={() => setShowModal(true)}>
        {children}
      </div>
    </Fragment>
  );
};

export default ImageModal;
