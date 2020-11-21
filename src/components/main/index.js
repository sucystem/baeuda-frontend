import React from 'react'
import './main.css'
import { useHistory } from 'react-router-dom';

function Main(){
    let history = useHistory();
    return <div id="main">
        <div id="notice" class="menu_box">
            <div class="box_head">공지사항</div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div id="schadule" class="menu_box">
            <div class="box_head">오늘의 일정</div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div id="assignment" class="menu_box">
            <div class="box_head">과제</div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>

}

export default Main;