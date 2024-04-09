import style from "./ImageCard.module.css";
import { AiFillLike } from "react-icons/ai";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={style.card} style={{ borderColor: image.color }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={style.img}
        onClick={() => openModal(image)}
      />
      <p className={style.text}>
        <AiFillLike />
        {image.likes}
      </p>
    </div>
  );
};

export default ImageCard;
