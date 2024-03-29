import React, {
  useRef,
  useMemo,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import "./Memo.scss";
import Draggable from "react-draggable";
import { debounce } from "underscore";
import { observer } from "mobx-react";
import { ResizeObserver } from "resize-observer";

function Memo({ item, Delete, Edit, SetPosition, SetWidthHeight }) {
  const handleRef = useRef(null);
  const memoContainer = useRef(null);
  const onChangeMemo = useMemo(
    () => debounce((e) => Edit(item.id, e.target.value), 500),
    [item.id, Edit]
  );

  const onChangeSize = useMemo(
    () =>
      debounce((entry) => {
        const { width, height } = entry[0].contentRect;
        SetWidthHeight(item.id, width, height);
      }, 100),
    [item.id, SetWidthHeight]
  );

  useLayoutEffect(() => {
    let RO = new ResizeObserver(onChangeSize);
    RO.observe(memoContainer.current);
    return () => {
      RO.disconnect();
      RO = null;
    };
  });

  const onChangePosition = useCallback(
    (x, y) => SetPosition(item.id, x, y),
    [item.id, SetPosition]
  );
  const onClickDelete = useCallback(() => Delete(item.id), [item.id, Delete]);
  useEffect(() => {
    return () => {
      onChangeMemo.cancel();
      onChangeSize.cancel();
    };
  }, [onChangeMemo, onChangeSize]);

  return (
    <Draggable
      handle=".memo-menu"
      nodeRef={memoContainer}
      x={item.x}
      y={item.y}
      onMove={onChangePosition}
    >
      <div
        className="memo-container"
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
        ref={memoContainer}
      >
        <div className="memo-menu" ref={handleRef}>
          <DragHandleIcon
            ref={handleRef}
            sx={{ cursor: "move", fontSize: "25px" }}
          />
          <CloseIcon
            sx={{ cursor: "pointer", fontSize: "25px", float: "right" }}
            onClick={onClickDelete}
          />
        </div>
        <textarea
          className="memo-text-area"
          defaultValue={item.content}
          name="txt"
          placeholder="텍스트를 입력하세요"
          onChange={onChangeMemo}
        ></textarea>
      </div>
    </Draggable>
  );
}

export default observer(Memo);
