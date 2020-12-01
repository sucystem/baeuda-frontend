import React, { Component } from 'react'
import './myLectureWait.css'
import callAPI from '../../../../_utils/apiCaller'

class MyLectureWait extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: []
        }
    }
    
    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getRegisterdLectures = async () => {
        callAPI(`lecture/regist`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
        });
    }

    handleCancel = (event) => {
        const {id} = event.target;
        const data = {
            lecture_id: id
        }
        callAPI(`lecture/registcancel`, 'POST', { ...this.getToken() }, data).then(res => {
            alert(res.data.msg);
            window.location.reload();
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getRegisterdLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLectureWait">
            <ul id="LectureWaitList">
                {this.state.lectures.map((lecture, i) => { return(
                    <li class="LectureWaitInfo">
                        <div class="LectureName">{lecture.name}</div>
                        <div class="LectureProf">{lecture.user_name}</div>
                        <div class="LectureQuota">{lecture.cur_student}/{lecture.max_student}</div>
                        <div class="lectureEnroll" id={lecture.id} onClick={(event) => this.handleCancel(event)}>취소</div>
                    </li>
                );})}
            </ul>
        </div>
    }
}

export default MyLectureWait;