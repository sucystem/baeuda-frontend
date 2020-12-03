import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function ProjectSidebar(){
    let history = useHistory();
    return <div id="project_side_bar">
        <ul>
            <li onClick={() => history.push("/project/ProjectList") }>프로젝트 목록</li>
            <li onClick={() => history.push("/project/ProjectRecruit") }>프로젝트 모집</li>
        </ul>
    </div>
}

export default ProjectSidebar;