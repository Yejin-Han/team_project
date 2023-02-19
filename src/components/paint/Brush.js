const Brush = ({ handleDrawing }) => {
  return (
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
  );
};

export default Brush;
