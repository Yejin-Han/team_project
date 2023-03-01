import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./draggable.css";
import { debounce } from "underscore";

function Draggable({ children, handleRef, onMove, x, y }) {
  const dragRef = useRef(null);
  const initialX = useRef(0);
  const initialY = useRef(0);
  const [position, setposition] = useState({ x, y });

  const Move = useMemo(() => debounce((x, y) => onMove(x, y), 500), [onMove]);

  const onMouseMove = useCallback(
    (event) => {
      setposition({
        x: event.clientX - initialX.current,
        y: event.clientY - initialY.current,
      });
      Move(event.clientX - initialX.current, event.clientY - initialY.current);
    },
    [Move]
  );
  const removeEvents = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", removeEvents);
    document.body.removeEventListener("mouseleave", removeEvents);
  }, [onMouseMove]);
  const onMouseDown = useCallback(
    (event) => {
      const { left, top } = dragRef.current.getBoundingClientReact();
      initialX.current = event.clientX - left;
      initialY.current = event.clientY - top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", removeEvents);
      document.body.addEventListener("mouseleave", removeEvents);
    },
    [onMouseMove, removeEvents]
  );

  useEffect(() => {
    const handle = handleRef.current;
    handle.addEventListener("mousedown", onMouseDown);
    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
    };
  }, [handleRef, onMouseDown]);

  return (
    <div
      ref={dragRef}
      className="draggable"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </div>
  );
}

export default Draggable;
