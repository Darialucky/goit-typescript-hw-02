import style from "./ImageCard.module.css";
import { BiSolidLike } from "react-icons/bi";

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
        <BiSolidLike />
        {image.likes}
      </p>
    </div>
  );
};

export default ImageCard;
