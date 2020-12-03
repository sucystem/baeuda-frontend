import React, { Component } from 'react'
import './style.css'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment')

class LectureAssignment extends Component {
    constructor(props) {
        super(props);

        const { lecture_id } = this.props.match.params;
        this.state = {
            lecture_id: lecture_id,
            lecture: [],
            posts: [],
            prof : false,
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getLecture = async () => {
        const lecture_id = this.state.lecture_id;
        callAPI(`lecture/info/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lecture: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
        })
    }

    getAssignment = async () => {
        const lecture_id = this.state.lecture_id;
        callAPI(`lecture/assignment/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    posts: res.data.data
                })
            } else {
                console.log(res.data.msg);
            }
        });
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user.level >= 1)
            this.setState({
                prof : true
            })
        this.getLecture();
        this.getAssignment();
    }

    handleSubmit = (event) => {
        const assingment_id = event.target;
        this.props.history.push(`/lectureroom/${this.state.lecture_id}/${this.state.lecture_id}/lecSubmit/${assingment_id}`)
    }

    render() {
        let history = this.props.history;
        return <div id="lecNotice">
            <div id="SubjectName">{this.state.lecture.name} - 과제</div>
            <div id="SubjectNotice">
                <ul>
                    <li>
                        <div class="Name TH">과제</div>
                        <div class="Date TH">기한</div>
                        <div class="Submit TH"></div>
                    </li>
                    {this.state.posts.map((post, i) => {
                        return (
                            <li>
                                <div class="Name" name={post.id} onClick= {() => history.push(`/lectureroom/${this.state.lecture_id}/${this.state.lecture_id}/assignmentInfo/${post.id}`)}>{post.title}</div>
                                <div class="Date">{moment(post.dueDate).format("YYYY-MM-DD HH:mm")}</div>
                                {!this.state.prof && <div class="Submit TD" name={post.id} onClick={(event) => this.handleSubmit(event)}>제출하기</div>}
                            </li>
                        );
                    })}
                </ul>
        {this.state.prof && <button className="btn_new_post" onClick={() => history.push(`/lectureroom/${this.state.lecture_id}/${this.state.lecture_id}/newAssignment`) }>과제등록</button>}
        </div>
        </div>
    }
}

export default LectureAssignment;