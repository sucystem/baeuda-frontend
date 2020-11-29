import React from 'react'
import './lecClass.css'
import { useHistory } from 'react-router-dom';

function LectureClass(){
    let history = useHistory();
    return <div id="LecClass">
        <div id="SubjectName">소프트웨어공학개론</div>
        <div id="SubjectProgression">
            <ul>
                <li class="classInfo">
                    <div class="classIndex">1강</div>
                    <div class="ProgressionBar"></div>
                    <div class="ProgressionPercent">100%</div>
                    <div class="TakeCourse">수강하기</div>
                </li>
            </ul>
        </div>
    </div>

}

export default LectureClass;