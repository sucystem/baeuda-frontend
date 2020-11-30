import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function StudyRecruit(){
    let history = useHistory();
    return <div id="StudyRecruit">
        <ul>
            <li>
                <div class="boardName">다같이 공부하실분</div>
                <div class="boardMember">3/9</div>
                <div class="boardJoin">신청</div> 
                <div class="boardInfo">정보보기</div>
            </li>
        </ul>
        <div id="MakeStudy" onClick={() => history.push("/study/MakeStudy") }>스터디 만들기</div>
    </div>

}

export default StudyRecruit;