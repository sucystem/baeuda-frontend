import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';
import StudySchedule from '../StudySchedule';
const moment = require('moment');

class StudyRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            study: [],
            reference: [],
            schedule: []
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = async () => {
        const { study_id } = this.props.match.params;
        callAPI(`study/info/${study_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    study: res.data.data
                });
            } else {
                alert(res.data.msg)
            }
        });
        callAPI(`study/reference/${study_id}`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    reference: res.data.data
                })
            } else {
                alert(res.data.msg)
            }            
        });
        callAPI(`study/schedule/${study_id}`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    schedule: res.data.data
                })
                console.log(res.data)
            } else {
                alert(res.data.msg)
            }            
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.getPosts();
    }

    render() {
        let history = this.props.history;
        return (<div>
            {
                this.state.study.map((item) => {
                    return (
                        <div id="StudyRoom">
                            <div id="StudyName">{item.name}</div>
                            <div id="btnMeetingRoom">미팅룸 입장</div>
                            <div id="StudyContent">
                                <div id="StudyReference">
                                    <div class="Room_Title">자료실</div>
                                    <div id="btnShare">자료 업로드</div>
                                    <div class="Room_Content">
                                        <ul>
                                            {
                                                this.state.reference.map((ref) => {
                                                    return (
                                                        <li>
                                                            <div class="RefName">{ref.name}</div>
                                                            <div class="RefWriter">{ref.writer}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div id="StudySchedule">
                                    <div class="Room_Title">스터디 일정</div>
                                    <div class="Room_Content">
                                        <StudySchedule  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>)
    }
}
export default StudyRoom;