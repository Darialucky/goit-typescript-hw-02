import { useEffect } from "react";
import Modal from "react-modal";
import style from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ url, alt, description, modalIsOpen, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <img src={url} alt={alt} className={style.img} />
      <p className={style.text}>{description}</p>
    </Modal>
  );
};

export default ImageModal;
