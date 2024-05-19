import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  openModal: (obj: Image) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image: Image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
