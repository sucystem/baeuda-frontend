import React, { Component } from 'react'
import './myLectureCompleted.css'
import callAPI from '../../../../_utils/apiCaller'

class MyLectureCompleted extends Component {
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

    getCompleteLectures = async () => {
        callAPI(`lecture/complete`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
        });
    }
    
    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getCompleteLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLectureCompleted">
            <div id="SubjectName">이수한 강의</div><br/>
            <ul id="completedList">
                {this.state.lectures.map((lecture, i) => {return(
                <li class="completedInfo">
                    <div class="LectureName">{lecture.name}</div>
                    <div class="LectureProf">{lecture.user_name}</div>
                    <div class="LectureGrade">{lecture.grade}</div>
                </li>
                );})}
            </ul>
        </div>
    }
}

export default MyLectureCompleted;