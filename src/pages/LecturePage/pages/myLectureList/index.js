import React from 'react'
import './myLectureList.css'
import { useHistory } from 'react-router-dom';

function MyLectureApply(){
    let history = useHistory();
    return <div id="myLectureList">
        <div class="lectureList">
            <div class="lectureName">소프트웨어공학개론</div>
            <div class="lectureProf">최은만</div>
            <div class="lectureQuota">11/20</div>
            <div class="lectureEnroll">신청</div>
            <div class="lectureInfo">정보보기</div>
        </div>
    </div>

}

export default MyLectureApply;