import React from 'react'
import './lecReference.css'
import { useHistory } from 'react-router-dom';

function LectureReference(){
    let history = useHistory();
    return <div id="lecReference">
        <div id="SubjectName">소프트웨어공학개론</div>
        <div id="SubjectReference">
            <ul>
                <li>
                    <div class="Name TH">글 제목</div>
                    <div class="Writer TH">작성자</div>
                    <div class="Hits TH">조회수</div>
                    <div class="Date TH">작성일</div>
                </li>
                <li>
                    <div class="Name">작년 중간고사 문제</div>
                    <div class="Writer">최은만</div>
                    <div class="Hits">21</div>
                    <div class="Date">2020.11.02 11:50:48</div>
                </li>
            </ul>
        </div>
    </div>

}

export default LectureReference;