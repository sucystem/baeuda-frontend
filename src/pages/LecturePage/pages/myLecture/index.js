import React from 'react'
import './myLecture.css'
import { useHistory } from 'react-router-dom';

function MyLecture(){
    let history = useHistory();
    return <div id="myLecture">
        <div id="myLectureRoom">
            <div class="lec_room_box">
                <div class="lec_box_name">
                    <div class="lec_box_subject">소프트웨어 공학개론</div>
                    <div class="lec_box_prof">최은만</div>
                </div>
                <div class="lec_box_button" onClick={() => history.push("/lectureroom") }>입장</div>
            </div>
        </div>
    </div>

}

export default MyLecture;