const Brush = ({ handleDrawing }) => {
  return (
    <div className="paint_tools">
      <div className="select_wrapper">
        <select
          id="brush_weight"
          onChange={(e) => {
            handleDrawing(e.target.value, "weight");
          }}
        >
          <option value="0">🖌️</option>
          <option>Thin</option>
          <option>Normal</option>
          <option>Thick</option>
        </select>
      </div>
      <p className="tool_title">Weight</p>
    </div>
  );
};

export default Brush;
