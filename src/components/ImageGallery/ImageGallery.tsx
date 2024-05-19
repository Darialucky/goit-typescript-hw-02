import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  openModal: (obj: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const uniqueImages = images.filter(
    (image, index, self) => index === self.findIndex((t) => t.id === image.id)
  );

  return (
    <ul className={css.gallery}>
      {uniqueImages.map((image: Image) => (
        <li key={image.id} className={css.item}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
