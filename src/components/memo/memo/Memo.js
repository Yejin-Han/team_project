import React, { useEffect, useMemo, useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import "./Memo.scss";
import Draggable from "react-draggable";
import { debounce } from "underscore";

function Memo({ item, Delete, Edit, SetPosition, SetWidthHeight }) {
  const handleRef = useRef(null);
  const onChangeMemo = useMemo(
    () => debounce((e) => Edit(item.id, e.target.value), 500),
    [item.id, Edit]
  );

  useEffect(() => {
    return () => {
      onChangeMemo.cancel();
    };
  }, [onChangeMemo]);
  return (
    <Draggable
      handleRef={handleRef}
      x={0}
      y={0}
      onMove={(x, y) => console.log(x, y)}
    >
      <div
        className="memo-container"
        style={{ width: `${250}px`, height: `${300}px` }}
      >
        <div className="menu">
          <DragHandleIcon
            ref={handleRef}
            sx={{ cursor: "move", fontSize: "25PX" }}
          />
          <CloseIcon
            sx={{ cursor: "pointer", fontSize: "25px", float: "right" }}
          />
        </div>
        <textarea
          className="memo-text-area"
          defaultValue={item.content}
          name="txt"
          placeholder="내용을 입력하세요"
          onChange={onChangeMemo}
        ></textarea>
      </div>
    </Draggable>
  );
}

export default Memo;

/*

 1. 이 컴포넌트는 한 개의 메모를 나타낸다
 2. 드래그 가능한 메모를 만들기 위해 'react-draggable' 라이브러리를 사용
 3. handleRef를 사용하여 드래그를 시작할 수 있는 영역을 정의
 4. onMove 콜백을 사용하여 드래그가 발생할 때마다 새로운 위치를 출력하도록 함

 - sx는 Material UI의 테마 시스템에서 사용되는 속성

*/
