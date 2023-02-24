import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "./Canvas";
import Items from "./Items";
import Brush from "./Brush";
import Colors from "./Colors";

export const useOnDraw = (canvasRef, onDraw) => {
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
  }, [canvasRef, onDraw]);

  const onMouseDown = () => {
    isDrawingRef.current = true;
  };

  return {
    onMouseDown,
  };
};

const Tools = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const [drawing, setDrawing] = useState({
    tool: "pencil",
    weight: "normal",
    color: "black",
  });

  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const saveToImg = () => {
    const url = canvasRef.current.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myArt.png";
    a.click();
  };

  const openImg = (e) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      console.log(e.target.files);
      const fileUrl = e.target.files[0];
      const imgUrl = URL.createObjectURL(fileUrl);
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => {
        ctx.drawImage(
          image,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      };
    }
  };

  const handleDrawing = (updateItem, type) => {
    const newDrawing = { ...drawing };
    if (updateItem === "eraser") {
      newDrawing["color"] = "white";
      newDrawing["tool"] = "eraser";
      setDrawing(newDrawing);
    } else if (updateItem === "Clear") {
      newDrawing["tool"] = "Clear";
      setDrawing(newDrawing);
    } else {
      newDrawing[type] = updateItem;
      setDrawing(newDrawing);
    }
    console.log(newDrawing);
  };

  return (
    <>
      <div className="top_page">
        <p>🎨 그림판</p>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          ✕
        </button>
      </div>
      <div className="header">
        <Items handleDrawing={handleDrawing} />
        <Brush handleDrawing={handleDrawing} />
        <Colors handleDrawing={handleDrawing} />
        <div className="btn_wrapper">
          <button
            type="button"
            className="Clear"
            drawing={drawing}
            onClick={clearCanvas}
          >
            Clear
          </button>
          <button type="button" className="save" onClick={saveToImg}>
            <span>Save</span>
          </button>
          <label className="open" onClick={openImg}>
            Open
            <input
              type="file"
              id="imgFile"
              accept="img/*"
              onChange={openImg.bind(this)}
            />
          </label>
        </div>
      </div>
      <Canvas
        canvasRef={canvasRef}
        width={900}
        height={600}
        drawing={drawing}
      />
    </>
  );
};

export default Tools;
