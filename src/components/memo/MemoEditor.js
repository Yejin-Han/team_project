import {useRef, useState} from "react";

const MemoEditor = ({createData}) => {
    
    const titleInput = useRef(); //Ref객체를 만들기
    const contentInput = useRef(); 

    
    const [state, setState] = useState({
        title:"",
        content:"",
    });
    
    const changeState = (e) => { //바뀐 값을 수행하는 이벤트
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const dataSubmit = () => {
        if(state.title.length < 1) {
            titleInput.current.focus(); //Ref객체의 current값은 선택하고자 하는 DOM을 가리킨다, 포커싱 DOM API focus() 호출
            return;
        }
        if(state.content.length < 5) {
            contentInput.current.focus();
            return;
        }   

        createData(state.title, state.content);
        alert("저장에 성공했습니다!")
        setState({
            title : "",
            content:"",
        });
    };

    return(
        <div className="MemoEditor">
            <h2>The Happiness of the Record</h2>
            <div>
                <input
                    ref = {titleInput} //선택하고 싶은 DOM에 속성으로 ref값을 설정하기
                    name = "title"
                    value={state.title} 
                    onChange={changeState}
                />
            </div>
            <div>
                <textarea
                    ref= {contentInput}
                    name = "content"
                    value={state.content}
                    onChange={changeState}
                />
            </div>
            <div>
                <button onClick={dataSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default MemoEditor;