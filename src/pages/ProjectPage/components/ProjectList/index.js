import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function ProjectList(){
    let history = useHistory();
    return <div id="ProjectList">
        <div id="ProjectRoom">
            <div class="Project_room_box">
                <div class="Project_box_name">
                    자료구조 팀 프로젝트
                </div>
                <div class="Project_box_button_enter" onClick={() => history.push("/Project/ProjectRoom") }>입장</div>
                <div class="Project_box_button_exit" >탈퇴하기</div>
            </div>
        </div>
    </div>

}

export default ProjectList;