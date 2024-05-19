import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ThreeCircles
        visible={true}
        height={100}
        width={100}
        color="#4fa94d"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export default Loader;
