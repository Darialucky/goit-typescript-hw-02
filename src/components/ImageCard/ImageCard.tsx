import css from "./ImageCard.module.css";
import { BiSolidLike } from "react-icons/bi";
import { Image } from "../App/App.types";

interface ImageProps {
  image: Image;
  openModal: (obj: Image) => void;
}

const ImageCard: React.FC<ImageProps> = ({ image, openModal }) => {
  return (
    <div className={css.card} style={{ borderColor: image.color }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
        onClick={() => openModal(image)}
      />
      <p className={css.text}>
        <BiSolidLike />
        {image.likes}
        {image.location}
      </p>
    </div>
  );
};

export default ImageCard;
