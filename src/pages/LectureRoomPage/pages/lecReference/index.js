import React, { Component } from 'react'
import './lecReference.css'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment')

class LectureReference extends Component {
    constructor(props) {
        super(props);

        const { lecture_id } = this.props.match.params;
        this.state = {
            lecture_id: lecture_id,
            lecture: [],
            posts: [],
            prof: false
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
        callAPI(`lecture/room/datas/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
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
        const user = JSON.parse(localStorage.getItem('user'));
        if(user.level >= 1)
            this.setState({
                prof : true
            })
        this.getLecture();
        this.getNotices();
    }

    render() {
        let history = this.props.history;
        return <div id="lecNotice">
            <div id="SubjectName">{this.state.lecture.name} - 학습자료</div>
            <div id="SubjectNotice">
                <ul>
                    <li>
                        <div class="Name TH">글 제목</div>
                        <div class="Writer TH">작성자</div>
                        <div class="Hits TH">조회수</div>
                        <div class="Write-Date TH">작성일</div>
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
        {this.state.prof && <button className="btn_new_post" onClick={() => history.push(`/lectureroom/${this.state.lecture_id}/${this.state.lecture_id}/newpost/reference`) }>새 글 작성</button>}
        </div>
        </div>
    }
}
export default LectureReference;