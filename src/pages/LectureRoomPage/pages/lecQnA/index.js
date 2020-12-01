import React, { Component } from 'react'
import './lecQnA.css'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment')

class LectureQnA extends Component {
    constructor(props){
        super(props);

        const { lecture_id } = this.props.match.params;
        this.state = {
            lecture_id: lecture_id,
            lecture: [],
            posts: []
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

    getNotices = async () => {
        const lecture_id = this.state.lecture_id;
        callAPI(`lecture/room/qnas/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg);
            }
        });
    }

    componentDidMount() {
        this.getLecture();
        this.getNotices();
    }

    render() {
        let history = this.props.history;
        return <div id="lecNotice">
            <div id="SubjectName">{this.state.lecture.name}</div>
            <div id="SubjectNotice">
                <ul>
                    <li>
                        <div class="Name TH">글 제목</div>
                        <div class="Writer TH">작성자</div>
                        <div class="Hits TH">조회수</div>
                        <div class="Date TH">작성일</div>
                    </li>
                    {this.state.posts.map((post, i) => {
                        return (
                            <li onClick= {() => history.push(`/lectureroom/${this.state.lecture_id}/${this.state.lecture_id}/post/${post.id}`)}>
                                <div class="Name">{post.title}</div>
                                <div class="Writer">{post.user_name}</div>
                                <div class="Hits">{post.count}</div>
                                <div class="Date">{moment(post.regDate).format("YYYY-MM-DD hh:mm:ss")}</div>
                            </li>
                        );
                    })}
                </ul>
        </div>
        </div>
    }
}

export default LectureQnA;