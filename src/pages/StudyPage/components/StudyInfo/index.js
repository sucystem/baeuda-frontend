import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment');

class StudyInfo extends Component{
    constructor(props) {
        super(props);    
        this.state = {
            post : []
        }

        this.readPost();
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getPosts();
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = async() => {
        const boardId = this.props.match.params.board_id;
        callAPI(`study/${study_id}/recruit_info`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    handleSubmitJoin = async (event) => {
        const study_id = event.target;
        event.preventDefault();
        try {
            if (this.state.comment) {
                callAPI(`study/${study_id}/joinStudy`, 'POST', { ...this.getToken() }, data).then(res => {
                    if (res.data.msg === '가입 신청을 성공했습니다.') {
                        window.location.reload();
                    } else {
                        alert(res.data.msg);
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let history = this.props.history;
        return <div id="study-post-detail">
        {this.state.post.map((item, i) => {
            return (<div><div id="title-writer-date">
                <p className="title">{item.recruitTitle}
                </p>
                
                <p>
                    <span className="writer">{item.currentSeat}/{item.maxSeat}</span>
            &nbsp;
            <span className="date">{moment(item.regDate).format("YYYY-MM-DD")}</span>
            {this.state.delete}
                </p>
            </div>
        <div id="content">
            <p>{item.recruitContent}</p>
        </div>
        <input type="submit" name={item.studyid} value="신청" onClick={(event) => this.handleSubmitJoin(event)}/>
        </div>
            );
        }
        )}
        </div>
}