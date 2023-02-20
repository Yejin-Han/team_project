import { useEffect, useRef } from "react";

export const useEraseCanvas = () => {
  const canvasRef = useRef(null);
  const eraseCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
    }
  };
  return {
    eraseCanvas,
  };
};

export const useOnDraw = (onDraw) => {
  const canvasRef = useRef(null);
  const prevPointsRef = useRef(null);
  const isDrawingRef = useRef(false);

  const mouseMoveRef = useRef(null);
  const mouseUpRef = useRef(null);

  useEffect(() => {
    const computePoints = (clientX, clientY) => {
      if (canvasRef.current) {
        const boundingRect = canvasRef.current.getBoundingClientRect();
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top,
        };
      }
    };

    const initMouseMove = () => {
      const mouseMove = (e) => {
        if (isDrawingRef.current) {
          const points = computePoints(e.clientX, e.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw) onDraw(ctx, points, prevPointsRef.current);
          prevPointsRef.current = points;
        }
      };
      mouseMoveRef.current = mouseMove;
      window.addEventListener("mousemove", mouseMove);
    };

    const initMouseUp = () => {
      const mouseUp = () => {
        isDrawingRef.current = false;
        prevPointsRef.current = null;
      };
      mouseUpRef.current = mouseUp;
      window.addEventListener("mouseup", mouseUp);
    };

    const removeMouseEvents = () => {
      if (mouseMoveRef.current) {
        window.removeEventListener("mousemove", mouseMoveRef.current);
      }
      if (mouseUpRef.current) {
        window.removeEventListener("mouseup", mouseUpRef.current);
      }
    };

    initMouseMove();
    initMouseUp();

    return () => {
      removeMouseEvents();
    };
  }, [onDraw]);

  const onMouseDown = () => {
    isDrawingRef.current = true;
  };

  const setCanvasRef = (ref) => {
    canvasRef.current = ref;
  };

  return {
    onMouseDown,
    setCanvasRef,
  };
};
