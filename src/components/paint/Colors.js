const colorList = [
  "black",
  "grey",
  "darkred",
  "red",
  "orange",
  "yellow",
  "green",
  "deepskyblue",
  "blue",
  "violet",
  "white",
  "lightgrey",
  "brown",
  "pink",
  "gold",
  "lightyellow",
  "greenyellow",
  "lightskyblue",
  "steelblue",
  "lavender",
];

const Colors = ({ handleDrawing }) => {
  const colorGrid = colorList.map((color, idx) => (
    <div
      key={idx}
      className="color_grid"
      style={{ backgroundColor: `${color}` }}
      onClick={() => {
        handleDrawing(color, "color");
      }}
      title={color}
    ></div>
  ));
  return (
    <div className="paint_tools">
      <div className="ways">
        <div className="color_list">
          <div className="color_grid_wrapper">{colorGrid}</div>
        </div>
        <input
          type="color"
          className="color_picker"
          onChange={(e) => {
            handleDrawing(e.target.value, "color");
          }}
        />
      </div>
      <p className="tool_title">Colors</p>
    </div>
  );
};

export default Colors;
