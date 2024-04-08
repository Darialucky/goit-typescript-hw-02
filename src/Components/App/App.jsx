import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../api";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [alt, setAlt] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(page, query);
        setImages((prevImages) => [...prevImages, ...data.results]);
        if (data.results.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setHasMore(true);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (obj) => {
    setShowModal(true);
    setAlt(obj.alt_description);
    setUrl(obj.urls.regular);
    setDescription(obj.description);
  };

  const closeModal = () => {
    setShowModal(false);
    setAlt("");
    setUrl("");
    setDescription("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSearch={onSubmit} />
      <div className="image-container">
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {hasMore &&
          images.length >= 10 &&
          images.length % 10 === 0 &&
          !loading && <LoadMoreBtn onClick={onLoadMore} loading={loading} />}
        {loading && <Loader />}
        {!images.length && !loading && <p>Sorry. There are no images...</p>}
        {showModal && (
          <ImageModal
            url={url}
            alt={alt}
            description={description}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
