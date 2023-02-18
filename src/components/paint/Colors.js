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

const colorGrid = colorList.map((color, idx) => (
  <div
    key={idx}
    className="color_grid"
    style={{ backgroundColor: `${color}` }}
    onClick={() => {}}
  ></div>
));

const Colors = () => {
  return (
    <>
      <div className="paint_tools">
        <div className="color_list">
          <div className="color_grid_wrapper">{colorGrid}</div>
        </div>
        <p className="tool_title">Colors</p>
      </div>
      <input type="color"></input>
    </>
  );
};

export default Colors;
