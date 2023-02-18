import { useOnDraw } from "./Hooks";

const canvasStyle = {
  backgroundColor: "#fff",
};

const Canvas = ({ width, height }) => {
  const drawLine = (start, end, ctx, color, width) => {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    /* ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 1, 0, Math.PI * 2);
    ctx.fill(); */
  };

  const onDraw = (ctx, points, prevPoints) => {
    drawLine(prevPoints, points, ctx, "#000", 5);
  };

  const { onMouseDown, setCanvasRef } = useOnDraw(onDraw);

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      onMouseDown={onMouseDown}
      ref={setCanvasRef}
    ></canvas>
  );
};

export default Canvas;
