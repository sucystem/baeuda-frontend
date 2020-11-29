import React from 'react'
import './myLectureWait.css'
import { useHistory } from 'react-router-dom';

function MyLectureWait(){
    let history = useHistory();
    return <div id="myLectureWait">
            <ul id="LectureWaitList">
                <li class="LectureWaitInfo"><div class="LectureName">소프트웨어공학개론</div><div class="LectureProf">최은만</div><div class="LectureQuota">11/20</div></li>
            </ul>
    </div>

}

export default MyLectureWait;