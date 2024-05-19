import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onclick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
