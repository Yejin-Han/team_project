import { observer } from "mobx-react-lite";
import Memo from "./memo/Memo";
import AddIcon from "@mui/icons-material/Add";
import { useCallback } from "react";

function MainMemo({ store }) {
  const AddMemo = useCallback(() => store.addMemo(), [store]);
  const Edit = useCallback(
    (id, content) => store.editMemo(id, content),
    [store]
  );
  const SetWidthHeight = useCallback(
    (id, width, height) => store.setWidthHeight(id, width, height),
    [store]
  );
  const SetPosition = useCallback(
    (id, x, y) => store.setPosition(id, x, y),
    [store]
  );
  const Delete = useCallback((id) => store.removeMemo(id), [store]);
  return (
    <>
      {store.memos.map((memo) => (
        <Memo
          key={memo.id}
          item={memo}
          Delete={Delete}
          Edit={Edit}
          SetWidthHeight={SetWidthHeight}
          SetPosition={SetPosition}
        />
      ))}

      <div
        style={{
          textAlign: "center",
          width: "300px",
          height: "250px",
          boxShadow: "5px 5px 20px rgba(0, 0, 0, .3)",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "30px",
            height: "200px",
            lineHeight: "200px",
          }}
        >
          Sticky Note
        </span>
        <AddIcon
          sx={{
            color: "white",
            background: "#f4d3ad",
            width: "100%",
            cursor: "pointer",
            height: "50px",
          }}
          onClick={AddMemo}
        />
      </div>
    </>
  );
}

export default observer(MainMemo);
