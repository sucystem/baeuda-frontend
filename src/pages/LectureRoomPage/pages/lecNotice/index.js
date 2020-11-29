import React from 'react'
import './lecNotice.css'
import { useHistory } from 'react-router-dom';

function LectureNotice(){
    let history = useHistory();
    return <div id="lecNotice">
        <div id="SubjectName">소프트웨어공학개론</div>
        <div id="SubjectNotice">
            <ul>
                <li>
                    <div class="THName">글 제목</div>
                    <div class="THWriter">작성자</div>
                    <div class="THHits">조회수</div>
                    <div class="THDate">작성일</div>
                </li>
                <li>
                    <div class="NoticeName">휴강 공지</div>
                    <div class="NoticeWriter">최은만</div>
                    <div class="NoticeHits">21</div>
                    <div class="NoticeDate">2020.11.02 11:50:48</div>
                </li>
            </ul>
        </div>
    </div>

}

export default LectureNotice;