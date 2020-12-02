import React, { Component } from 'react'
import './lec_room_side_bar.css'

class LectureRoomSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accept: "",
            user_level : 1,
        }
        this.state.user_level = JSON.parse(localStorage.getItem('user')).level;
    }

    render() {
        let history = this.props.history;
        const lecture_id = this.props.match.params.lecture_id;
        if(this.state.user_level == 2){
            return(<div id="lec_room_side_bar">
            <ul>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/accept`)}>수강생</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/notice`)}>공지사항</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/reference`)}>학습자료</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/qna`)}>질문답변</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/assignment`)}>과제등록</li>
            </ul>
        </div>

            )
        }else{
            return (<div id="lec_room_side_bar">
            <ul>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}`)}>수강하기</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/notice`)}>공지사항</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/reference`)}>학습자료</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/qna`)}>질문답변</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/assignment`)}>과제제출</li>
            </ul>
        </div>);
        }        
    }
}

export default LectureRoomSidebar;