import React, { Component } from 'react'
import callAPI from '../../../../_utils/apiCaller'
import './style.css'

class LectureAccept extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            'GET',
            { ...this.getToken() },
            null,
        );

        if (res.data.result === 'true') {
            this.setState({
                students: res.data.data
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const lecture_id = this.props.match.params.lecture_id;
        const { name, value } = event.target;
        try {
            const data = {
                option: name,
                studentId: value
            }
            const res = await callAPI(
                `lecture/accept/${lecture_id}`,
                'POST',
                { ...this.getToken() },
                data
            );
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.getStudents();
    }

    render() {
        return (
            <div id="lecture-accept">
                <ul id="students-list">
                    {this.state.students.map((student, index) => {
                        return (
                            <li class="student-info">
                                <div class="student-univ">{student.univid}</div>
                                <div class="student-id">{student.student_id}</div>
                                <div class="student-name">{student.user_name}</div>
                                <button name="accept" value={student.id} onClick={(event) => this.handleSubmit(event)}>승인</button>
                                <button name="cancel" value={student.id} onClick={(event) => this.handleSubmit(event)}>취소</button>
                            </li>
                        );
                    })}
                </ul>
            </div>

        )
    }
}

export default LectureAccept;