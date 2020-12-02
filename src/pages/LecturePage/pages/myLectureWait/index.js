import React, { Component } from 'react'
import './myLectureWait.css'
import callAPI from '../../../../_utils/apiCaller'

class MyLectureWait extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: [],
            error: ""
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
                this.setState({error:res.data.msg})
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
            <div id="SubjectName">승인대기 강의</div><br/>
            <ul id="LectureWaitList">
                {this.state.lectures.map((lecture, i) => { return(
                    <li className="LectureWaitInfo">
                        <div className="LectureName">{lecture.name}</div>
                        <div className="LectureProf">{lecture.user_name}</div>
                        <div className="LectureQuota">{lecture.cur_student}/{lecture.max_student}</div>
                        <div className="lectureEnroll" id={lecture.id} onClick={(event) => this.handleCancel(event)}>취소</div>
                    </li>
                );})}
                {this.state.error}
            </ul>
        </div>
    }
}

export default MyLectureWait;