import React, { Component } from 'react'
import './lec_room_side_bar.css'

class LectureRoomSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accept: "",
        }
    }

    componentDidMount(){
        let history = this.props.history;
        const lecture_id = this.props.match.params.lecture_id;
        if(JSON.parse(localStorage.getItem('user')).level == 2){
            this.setState({
                accept: <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/accept`)}>수강신청승인</li>
            })
        }
    }

    render() {
        let history = this.props.history;
        const lecture_id = this.props.match.params.lecture_id;
        return <div id="lec_room_side_bar">
            <ul>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}`)}>수강하기</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/notice`)}>공지사항</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/reference`)}>학습자료</li>
                <li onClick={() => history.push(`/lectureroom/${lecture_id}/${lecture_id}/qna`)}>질문답변</li>
                {this.state.accept}
            </ul>
        </div>
    }
}

export default LectureRoomSidebar;