import { useState, forwardRef } from "react";
import { useOnDraw } from "./Tools";

const Canvas = forwardRef(({ width, height, drawing, canvasRef }, ref) => {
  const canvasStyle = { backgroundColor: "white" };
  const [styleInfo, setStyleInfo] = useState({
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

  const paintCanvas = (color, ctx) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const onDraw = (ctx, points, prevPoints) => {
    const newItem = {
      color: color,
      width: weight,
    };
    setStyleInfo(newItem);
    if (tool === "eraser") {
      const newItem = {
        color: "white",
        width: weight,
      };
      setStyleInfo(newItem);
    }
    drawLine(prevPoints, points, ctx, styleInfo.color, styleInfo.width);
    if (tool === "paintBucket") {
      paintCanvas(styleInfo.color, ctx);
    }
  };

  const { onMouseDown } = useOnDraw(canvasRef, onDraw);

  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      onMouseDown={onMouseDown}
      ref={canvasRef}
    ></canvas>
  );
});

export default Canvas;
