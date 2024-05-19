import style from "./ImageCard.module.css";
import { BiSolidLike } from "react-icons/bi";
import { Image } from "../../types";

interface ImageProps {
  image: Image;
  openModal: (obj: Image) => void;
}

const ImageCard: React.FC<ImageProps> = ({ image, openModal }) => {
  return (
    <div className={style.card} style={{ borderColor: image.color }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={style.img}
        onClick={() => openModal(image)}
      />
      <p className={style.text}>
        <BiSolidLike />
        {image.likes}
        {image.location}
      </p>
    </div>
  );
};

export default ImageCard;
