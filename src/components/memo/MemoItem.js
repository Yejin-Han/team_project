import {useRef, useState} from "react";

const MemoItem = ({dataEdit, dataDelete, title, content, date, id}) => {

    const [MemoEdit, setMemoEdit] = useState("false");
    const toggleMemoEdit = () => setMemoEdit(!MemoEdit); //함수가 실행되면 불린 연산을 통해 MemoEdit가 가지고 있는 값을 반전 시킴

    const [currentContent, setCurrentContent] = useState(content);
    const currentContentInput = useRef();

    const btnDelete = () => {
        if(window.confirm(`${id}번째 메모를 삭제하시겠습니까?`)){
            dataDelete(id);
        }
    };

    const quitEdit = () => { //현재 콘텐츠를 수정을 멈추면 다시 원래의 값이 초기값으로 돌아옴
        setMemoEdit(false);
        setCurrentContent(content);
    };

    const btnEdit = () => { //수정 완료 버튼을 눌렀을 때 실행할 함수
        if(currentContent.length < 5){
            currentContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 메모를 수정하시겠습니까?`)){
            dataEdit(id, currentContent);
            toggleMemoEdit();
        }
    };

    return (
        <div className="MemoItem">
            <div className="info">
                <span>제목 : {title}</span>
                <br />
                <span className="date">{new Date(date).toLocaleString()}</span>
            </div>
            <div className="content">
                {MemoEdit ? (
                    <>
                        <textarea 
                            ref = {currentContentInput}
                            value={currentContent} 
                            onChange={(e)=> setCurrentContent(e.target.value)}/>
                    </>
                ) : (
                    <>
                        {content}
                    </>

                )}
            </div>

            {
                MemoEdit ? (
                    <>
                        <span className="btn" onClick={quitEdit}>수정 취소</span>
                        <span className="btn" onClick={btnEdit}>수정 완료</span>
                    </>
                ) : (
                    <>
                        <span className="btn" onClick={btnDelete}>삭제하기</span>
                        <span className="btn" onClick={toggleMemoEdit}>수정하기</span>
                    </>
                )

            }
        </div>
    )
}

export default MemoItem;