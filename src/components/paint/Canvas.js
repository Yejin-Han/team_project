import { useOnDraw } from "./Hooks";

const canvasStyle = {
  backgroundColor: "#fff",
};

const Canvas = ({ width, height }) => {
  const setCanvasRef = useOnDraw();
  const onDraw = (ctx, points) => {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(points.x, points.y, 2, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      ref={setCanvasRef}
    ></canvas>
  );
};

export default Canvas;
