import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Items from "./Items";
import Brush from "./Brush";
import Colors from "./Colors";

const Tools = () => {
  const [drawing, setDrawing] = useState({
    tool: "brush",
    weight: "normal",
    color: "black",
  });

  const handleDrawing = (updateItem, type) => {
    const newDrawing = { ...drawing };
    if (updateItem === "eraser") {
      newDrawing["color"] = "white";
      newDrawing["tool"] = "white";
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
        <Colors drawing={drawing} handleDrawing={handleDrawing} />
      </div>
    </>
  );
};

export default Tools;
