import React, { Component } from 'react'
import callAPI from '../../../../_utils/apiCaller'
import './style.css'

class LectureAccept extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            students: []
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getStudents = async () => {
        const lecture_id = this.props.match.params.lecture_id;
        const res = await callAPI(
            `lecture/accept/${lecture_id}`,
            'POST', 
            { ...this.getToken() }, 
            null,
        );
        console.log(res);

    }

    componentDidMount() {
        this.getStudents();
    }

    render() {
        return (
        <div id="lecture-accept">
            <ul id="students-list">
                {/* {this.state.students.map((student, index) => {return(
                <li class="student-info">
                    <div class="student-univ">{student.name}</div>
                    <div class="student-id">{student.user_name}</div>
                    <div class="student-name">{student.grade}</div>
                </li>
                );})} */}
            </ul>
        </div>

        )
    }
}

export default LectureAccept;