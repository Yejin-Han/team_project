import { useRef } from "react";

export const useOnDraw = (onDraw) => {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);

  const computePoints = (clientX, clientY) => {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      };
    }
  };

  const initMouseDown = () => {
    if (!canvasRef.current) return;
    const mouseDown = () => {
      isDrawingRef.current = true;
    };
    canvasRef.current.addEventListener("mousedown", mouseDown);
  };

  const initMouseMove = () => {
    const mouseMove = (e) => {
      if (isDrawingRef.current) {
        const points = computePoints(e.clientX, e.clientY);
        console.log(points);
        const ctx = canvasRef.current.getContext("2d");
        if (onDraw) onDraw(ctx, points);
      }
    };
    window.addEventListener("mousemove", mouseMove);
  };

  const initMouseUp = () => {
    const mouseUp = () => {
      isDrawingRef.current = false;
    };
    canvasRef.current.addEventListener("mouseup", mouseUp);
  };

  const setCanvasRef = (ref) => {
    if (!ref) return;
    canvasRef.current = ref;
    initMouseDown();
    initMouseMove();
    initMouseUp();
  };

  return setCanvasRef;
};
