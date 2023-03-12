const Items = ({ handleDrawing }) => {
  return (
    <div className="paint_tools">
      <ul className="tool_list">
        <li>
          <button
            name="pencil"
            onClick={(e) => handleDrawing(e.target.name, "tool")}
          >
            ✏️
          </button>
        </li>
        <li>
          <button
            name="paintBucket"
            onClick={(e) => handleDrawing(e.target.name, "tool")}
          >
            🪣
          </button>
        </li>
        <li>
          <button
            name="eraser"
            onClick={(e) => handleDrawing(e.target.name, "tool")}
          >
            ✨
          </button>
        </li>
      </ul>
      <p className="tool_title">Tools</p>
    </div>
  );
};

export default Items;
