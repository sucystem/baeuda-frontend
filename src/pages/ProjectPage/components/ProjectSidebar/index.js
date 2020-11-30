import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function ProjectSidebar(){
    let history = useHistory();
    return <div id="Project_side_bar">
        <ul>
            <li onClick={() => history.push("/Project/ProjectList") }>팀 프로젝트 목록</li>
            <li onClick={() => history.push("/Project/ProjectSchedule") }>팀 프로젝트 일정</li>
            <li onClick={() => history.push("/Project/ProjectRecruit") }>팀 프로젝트 모집</li>
        </ul>
    </div>
}

export default ProjectSidebar;