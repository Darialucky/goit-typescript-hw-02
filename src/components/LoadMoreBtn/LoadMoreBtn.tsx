import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  loading: boolean;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
