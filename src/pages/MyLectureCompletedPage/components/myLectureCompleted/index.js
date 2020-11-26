import React from 'react'
import './myLectureCompleted.css'
import { useHistory } from 'react-router-dom';

function MyLectureCompleted(){
    let history = useHistory();
    return <div id="myLectureCompleted">
        <ul id="completedList">
            <li class="completedInfo"><div class="LectureName">소프트웨어공학개론</div><div class="LectureProf">최은만</div><div class="LectureGrade">A+</div></li>
        </ul>    
    </div>

}

export default MyLectureCompleted;