import Modal, { Styles } from "react-modal";
import css from "./ImageModal.module.css";

const customStyles: Styles = {
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
    boxSizing: "border-box",
  },
};

Modal.setAppElement("#root");

interface ModalProps {
  alt: string;
  description: string;
  url: string;
  modalIsOpen: boolean;
  likes: string;
  user: { name?: string; location?: string };
  userLoc: string;
  closeModal: () => void;
}

const ImageModal: React.FC<ModalProps> = ({
  url,
  alt,
  description,
  modalIsOpen,
  closeModal,
  likes,
  user,
}) => {
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
            <p className={css.text}>Author: {user?.name}</p>
            <p className={css.text}>Location: {user?.location}</p>
            <p className={css.text}>Likes: {likes}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
