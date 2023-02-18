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

  const handleDrawing = (updateItem, type) => {
    const newDrawing = { ...drawing };
    newDrawing[type] = updateItem;
    console.log(newDrawing);
  };

  return (
    <div className="header">
      <Items handleDrawing={handleDrawing} />
      <Brush handleDrawing={handleDrawing} />
      <Colors drawing={drawing} />
    </div>
  );
};

export default Tools;
