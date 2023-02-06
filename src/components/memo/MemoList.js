import MemoItem from "./MemoItem"

const MemoList = ({dataEdit, dataDelete, memoList}) => {
    return(
        <div className="MemoList">
            <h2>Memo List</h2>
            <h4>{memoList.length}개의 메모가 있습니다</h4>
            <div>
                {memoList.map((i) => (
                    <MemoItem key={i.id} {...i} dataEdit={dataEdit} dataDelete={dataDelete}/>
                ))}
            </div>
        </div>
    )
}

MemoList.defaultProps = {//props의 기본값 설정
    memoList: [] 
}

export default MemoList;