import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function ProjectRoom(){
    let history = useHistory();
    return <div id="ProjectRoom">
        <div id="ProjectName">자료구조 팀 프로젝트</div>
        <div id="ProjectContent">
            <div id="ProjectReference">
                <div class="Room_Title">자료실</div>
                <div class="Room_Content">
                    <ul>
                        <li>
                            <div class="RefName">멘토링 기록.pdf</div>
                            <div class="RefWriter">홍길동</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="ProjectSchedule">
                <div class="Room_Title">팀 프로젝트 일정</div>
                <div class="Room_Content">
                    <ul>
                        <li>
                            <div class="ScheName">멘토링</div>
                            <div class="ScheDate">2020/12/01 PM 12:40</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

}

export default ProjectRoom;