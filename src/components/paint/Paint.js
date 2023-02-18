import Canvas from "./Canvas";
import Tools from "./Tools";
import "./Paint.style.scss";

const Paint = () => {
  return (
    <div id="main_paint">
      <Tools />
      <Canvas width={800} height={600} />
    </div>
  );
};

export default Paint;
