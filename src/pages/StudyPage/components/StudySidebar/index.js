import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function StudySidebar(){
    let history = useHistory();
    return <div id="study_side_bar">
        <ul>
            <li onClick={() => history.push("/study/StudyList") }>스터디 목록</li>
            <li onClick={() => history.push("/study/StudyRecruit") }>스터디 모집</li>
        </ul>
    </div>
}

export default StudySidebar;