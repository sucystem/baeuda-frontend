import React from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

function MakeStudy(){
    let history = useHistory();
    return <div id="MakingStudy">
        <div class="StudyInfo">
            <div class="StudySubject"><input id="StudySubject" type="text" name="StudySubject" required></input></div>
            <div class="BoardName"><input id="StudyName" type="text" name="StudyName" required></input></div>
            <div class="StudyMember"><input id="StudyMember" type="text" name="StudyMember" required></input></div>
        </div>
        <div class="StudyContent"><input id="StudyContent" type="text" name="StudyContent" required></input></div>
        <div class="StudyAdd">올리기</div>
    </div>

}

export default MakeStudy;