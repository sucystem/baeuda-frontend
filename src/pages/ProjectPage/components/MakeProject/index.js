import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function MakeProject(){
    let history = useHistory();
    return <div id="MakingProject">
        <div class="ProjectInfo">
            <div class="ProjectSubject"><input id="ProjectSubject" type="text" name="ProjectSubject" required></input></div>
            <div class="BoardName"><input id="ProjectName" type="text" name="ProjectName" required></input></div>
            <div class="ProjectMember"><input id="ProjectMember" type="text" name="ProjectMember" required></input></div>
        </div>
        <div class="ProjectContent"><input id="ProjectContent" type="text" name="ProjectContent" required></input></div>
        <div class="ProjectAdd">올리기</div>
    </div>

}

export default MakeProject;