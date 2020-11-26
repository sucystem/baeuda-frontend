import React from 'react'
import './lec_side_bar.css'
import { useHistory } from 'react-router-dom';

function MyLecture(){
    let history = useHistory();
    return <div id="lec_side_bar">
            <ul>
                <li onClick={() => history.push("/myLecture") }>수강중 과목</li>
                <li>이수한 과목</li>
                <li>승인대기 과목</li>
                <li onClick={() => history.push("/myLectureList")}>강의 신청</li>
            </ul>
    </div>

}

export default MyLecture;