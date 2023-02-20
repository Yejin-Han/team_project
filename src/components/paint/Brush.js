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
          <option value="1">1px</option>
          <option value="3">3px</option>
          <option value="5">5px</option>
          <option value="8">8px</option>
        </select>
      </div>
      <p className="tool_title">Weight</p>
    </div>
  );
};

export default Brush;
