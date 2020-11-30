import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function ProjectRecruit(){
    let history = useHistory();
    return <div id="ProjectRecruit">
        <ul>
            <li>
                <div class="boardName">다같이 공부하실분</div>
                <div class="boardMember">3/9</div>
                <div class="boardJoin">신청</div> 
                <div class="boardInfo">정보보기</div>
            </li>
        </ul>
        <div id="MakeProject" onClick={() => history.push("/Project/MakeProject") }>팀 프로젝트 만들기</div>
    </div>

}

export default ProjectRecruit;