import React from 'react'
import './lec_room_side_bar.css'
import { useHistory } from 'react-router-dom';

function LectureRoomSidebar(){
    let history = useHistory();
    return <div id="lec_room_side_bar">
            <ul>
                <li onClick={() => history.push("/lectureroom") }>수강하기</li>
                <li onClick={() => history.push("/lectureroom/notice")}>공지사항</li>
                <li onClick={() => history.push("/lectureroom/reference")}>학습자료</li>
                <li onClick={() => history.push("/lectureroom/qna")}>질문답변</li>
            </ul>
    </div>

}

export default LectureRoomSidebar;