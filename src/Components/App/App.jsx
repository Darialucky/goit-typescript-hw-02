import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../api";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(page, query);
        setImages((prevImages) => [...prevImages, ...data.results]);
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
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alt, setAlt] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSearch={onSubmit} />
      {error && <ErrorMessage />}
      {!images.length && isEmpty && <p>Let's begin search...</p>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && !loading && (
        <LoadMoreBtn onClick={onLoadMore} loading={loading} />
      )}
      {loading && <Loader />}
      {!images.length && !isEmpty && <p>Sorry. There are no images...</p>}
      <ImageModal
        url={url}
        alt={alt}
        description={description}
        modalIsOpen={showModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default App;
