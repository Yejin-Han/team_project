import { useState } from "react";
import { useOnDraw } from "./Hooks";

const Canvas = ({ width, height, drawing }) => {
  const [canvasStyle, setCanvasStyle] = useState({
    backgroundColor: "white",
  });
  const [lineStyle, setLineStyle] = useState({
    color: "black",
    width: 2,
  });

  const { tool, weight, color } = drawing;

  const drawLine = (start, end, ctx, color, width) => {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  };

  const painted = () => {
    if (tool === "paintBucket") {
      const newItem = {
        backgroundColor: color,
      };
      setCanvasStyle(newItem);
    }
  };

  const onDraw = (ctx, points, prevPoints) => {
    const newItem = {
      color: color,
      width: weight,
    };
    setLineStyle(newItem);
    if (tool === "eraser") {
      const newItem = {
        color: "white",
        width: weight,
      };
      setLineStyle(newItem);
    }
    drawLine(prevPoints, points, ctx, lineStyle.color, lineStyle.width);
  };

  const { onMouseDown, setCanvasRef } = useOnDraw(onDraw);

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      onClick={painted}
      onMouseDown={onMouseDown}
      ref={setCanvasRef}
    ></canvas>
  );
};

export default Canvas;
