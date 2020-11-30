import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function StudyList(){
    let history = useHistory();
    return <div id="StudyList">
        <div id="studyRoom">
            <div class="study_room_box">
                <div class="study_box_name">
                    소프트웨어 공학개론 스터디
                </div>
                <div class="study_box_button_enter" onClick={() => history.push("/study/StudyRoom") }>입장</div>
                <div class="study_box_button_exit" >탈퇴하기</div>
            </div>
        </div>
    </div>

}

export default StudyList;