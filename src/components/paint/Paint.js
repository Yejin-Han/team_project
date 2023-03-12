import Tools from "./component/Tools";
import "./Paint.style.scss";

const Paint = () => {
  return (
    <div id="main_paint">
      <div className="top paint_top">
        <h2>🎨 그림판</h2>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          ✕
        </button>
      </div>
      <Tools />
    </div>
  );
};

export default Paint;
