import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "./Canvas";
import Items from "./Items";
import Brush from "./Brush";
import Colors from "./Colors";
import { useEraseCanvas } from "./Hooks";

const Tools = () => {
  const navigate = useNavigate();
  const [drawing, setDrawing] = useState({
    tool: "pencil",
    weight: "normal",
    color: "black",
  });

  const eraseCanvas = useEraseCanvas();
  const [canvasRef, setCanvasRef] = useState(null);

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
          X
        </button>
      </div>
      <div className="header">
        <Items handleDrawing={handleDrawing} />
        <Brush handleDrawing={handleDrawing} />
        <Colors handleDrawing={handleDrawing} />
        <div className="btn_wrapper">
          <button
            type="button"
            className="clear"
            drawing={drawing}
            onClick={(e) => {
              handleDrawing(e.target.textContent, "tool");
              eraseCanvas();
            }}
            ref={setCanvasRef}
          >
            Clear
          </button>
          <button type="button" className="save">
            Save
          </button>
          <button type="button" className="open">
            Open
          </button>
        </div>
      </div>
      <Canvas width={900} height={600} drawing={drawing} />
    </>
  );
};

export default Tools;
