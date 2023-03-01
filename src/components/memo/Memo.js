import { useRef } from "react";
import Draggable from "./components/draggable";

function Memo() {
  const handle = useRef(null);
  return (
    <>
      <Draggable handleRef={handle}>
        <div style={{ width: "100px", height: "100px", background: "#cd7d9f" }}>
          <button ref={handle}>Move</button>
        </div>
      </Draggable>
    </>
  );
}

export default Memo;
