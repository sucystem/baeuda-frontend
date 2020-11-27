import React from 'react'
import './lec_room_side_bar.css'
import { useHistory } from 'react-router-dom';

function LectureRoom(){
    let history = useHistory();
    return <div id="lec_room_side_bar">
            <ul>
                <li onClick={() => history.push("/lecClass") }>수강하기</li>
                <li onClick={() => history.push("/lecNotice")}>공지사항</li>
                <li onClick={() => history.push("/lecReference")}>학습자료</li>
                <li onClick={() => history.push("/lecQnA")}>질문답변</li>
            </ul>
    </div>

}

export default LectureRoom;