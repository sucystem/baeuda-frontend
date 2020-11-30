import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function StudyRoom(){
    let history = useHistory();
    return <div id="StudyRoom">
        <div id="StudyName">인공지능 스터디</div>
        <div id="StudyContent">
            <div id="StudyReference">
                <div class="Room_Title">자료실</div>
                <div class="Room_Content">
                    <ul>
                        <li>
                            <div class="RefName">7주차 1강 필기.pdf</div>
                            <div class="RefWriter">홍길동</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="StudySchedule">
                <div class="Room_Title">스터디 일정</div>
                <div class="Room_Content">
                    <ul>
                        <li>
                            <div class="ScheName">7주차 1강 복습</div>
                            <div class="ScheDate">2020/12/01 PM 12:40</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

}

export default StudyRoom;