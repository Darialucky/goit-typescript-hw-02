import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
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

export function ImageModal({
  url,
  alt,
  description,
  modalIsOpen,
  closeModal,
  likes,
  user,
  userLoc,
}) {
  return (
    <div className={css.modalOverlay}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img className={css.img} src={url} alt={alt} />
        <div className={css.wrapper}>
          <p>{description}</p>
          <div className={css.contentWrap}>
            <p className={css.text}>Author: {user}</p>
            <p className={css.text}>Location: {userLoc}</p>
            <p className={css.text}>Likes: {likes}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ImageModal;
