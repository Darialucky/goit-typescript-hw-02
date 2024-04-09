import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
