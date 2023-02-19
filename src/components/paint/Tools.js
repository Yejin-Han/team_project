import React, { useState } from "react";
import Items from "./Items";
import Brush from "./Brush";
import Colors from "./Colors";

const Tools = () => {
  const [drawing, setDrawing] = useState({
    tool: "brush",
    weight: "normal",
    color: "black",
  });

  const handleDrawing = (updatedItem, type) => {
    const newDrawing = { ...drawing };
    if (updatedItem === "eraser") {
      newDrawing[color] = "white";
      setDrawing(newDrawing);
    } else {
      newDrawing[type] = updatedItem;
      setDrawing(newDrawing);
    }
    console.log(newDrawing);
  };

  return (
    <div className="header">
      <Items handleDrawing={handleDrawing} />
      <Brush handleDrawing={handleDrawing} />
      <Colors drawing={drawing} handleDrawing={handleDrawing} />
    </div>
  );
};

export default Tools;
