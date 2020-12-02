import React, { Component } from 'react'
import callAPI from '../../../../_utils/apiCaller'
import './style.css'

class LectureAccept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            accepts: [],
            grades: [],
            lecture: {}
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
        console.log(res.data);

        if (res.data.result === 'true') {
            this.setState({
                students: res.data.data.students,
                accepts: res.data.data.accepts,
                grades: res.data.data.grades,
                lecture: res.data.data.rows[0]
            })
        } else {
            alert(res.data.msg);
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const lecture_id = this.props.match.params.lecture_id;
        const { name, value } = event.target;
        try {
            var data = {
                option: name,
                studentId: value,
            }

            let res = {};
            if (name === 'graduate') {
                data.grade = 'A+';
                res = await callAPI(
                    `lecture/graduate/${lecture_id}`,
                    'POST',
                    { ...this.getToken() },
                    data
                );
            } else if(name === 'delete') {
                res = await callAPI(
                    `lecture/outstudent/${lecture_id}`,
                    `POST`,
                    {...this.getToken()},
                    data
                )
            }else {
                res = await callAPI(
                    `lecture/accept/${lecture_id}`,
                    'POST',
                    { ...this.getToken() },
                    data
                );
            }

            if (res.data.result !== 'true') {
                alert(res.data.msg);
            }

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
                    <h2>수강중 : {this.state.lecture.cur_student}/{this.state.lecture.max_student}</h2>
                    {this.state.students.map((student, index) => {
                        return (
                            <li class="student-info">
                                <div class="student-name">{student.user_name}</div>
                                <div class="student-univ">{student.univid}</div>
                                <div class="student-id">{student.student_id}</div>
                                <button name="graduate" value={student.id} onClick={(event) => this.handleSubmit(event)}>이수</button>
                                &nbsp;
                                <button name="delete" value={student.id} onClick={(event) => this.handleSubmit(event)}>퇴출</button>
                            </li>
                        );
                    })}
                    <br />
                    <h2>승인 대기 : {this.state.accepts.length}/{this.state.lecture.max_student - this.state.lecture.cur_student}</h2>
                    {this.state.accepts.map((student, index) => {
                        return (
                            <li class="student-info">
                                <div class="student-name">{student.user_name}</div>
                                <div class="student-univ">{student.univid}</div>
                                <div class="student-id">{student.student_id}</div>
                                <button name="accept" value={student.id} onClick={(event) => this.handleSubmit(event)}>승인</button>
                                &nbsp;
                                <button name="cancel" value={student.id} onClick={(event) => this.handleSubmit(event)}>취소</button>
                            </li>
                        );
                    })}
                    <br />
                    <h2>이수 : {this.state.grades.length}</h2>
                    {this.state.grades.map((student, index) => {
                        return (
                            <li class="student-info">
                                <div class="student-grade">{student.grade}&nbsp;&nbsp;</div>
                                <div class="student-name">{student.user_name}</div>
                                <div class="student-univ">{student.univid}</div>
                                <div class="student-id">{student.student_id}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>

        )
    }
}

export default LectureAccept;