import React, { useRef, useState } from "react";
import MemoEditor from "./MemoEditor";
import MemoList from "./MemoList";
import "./memo.style.scss";
const Memo = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const createData = (title, content) => {
    //새로운 데이터 추가하기
    const date = new Date().getTime(); //현재 시간 가져오기
    const newItem = {
      title,
      content,
      date,
      id: dataId.current, //0
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const dataDelete = (targetId) => {
    const newMemoList = data.filter((i) => i.id !== targetId);
    setData(newMemoList);
  };

  const dataEdit = (targetId, newContent) => {
    //수정대상 아이디, 수정될 데이터를 인자로 받아오기
    setData(
      //수정대상 아이디와 일치하는 대상 찾기
      data.map((i) => (i.id === targetId ? { ...i, content: newContent } : i))
    );
  };

  return (
    <div className="main_memo">
      <MemoEditor createData={createData} />
      <MemoList dataEdit={dataEdit} dataDelete={dataDelete} memoList={data} />
    </div>
  );
};

export default Memo;
