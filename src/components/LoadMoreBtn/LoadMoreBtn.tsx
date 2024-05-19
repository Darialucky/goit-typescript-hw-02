import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  loading: boolean;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
