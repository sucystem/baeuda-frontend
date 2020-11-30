import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

function MyScheduleSidebar(){
    let history = useHistory();
    return <div id="my_schedule_side_bar">
        <ul>
            <li onClick={() => history.push("/myschedule/")}>일정</li>
            <li onClick={() => history.push("/myschedule/mytimetable")}>시간표</li>
        </ul>
    </div>
}

export default MyScheduleSidebar;