import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';
import StudySchedule from '../StudySchedule';
import StudyReference from '../studyReference';
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
                console.log(res.data.msg)
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
                            <div>
                                <a href={item.link} className="container-meeting-room" target='_blank'><div id="btnMeetingRoom">미팅룸 입장</div></a>
                                <div id="btnTeamPeopleManage">팀원 관리</div>
                            </div>
                            <div id="StudyContent">
                                <div id="StudyReference">
                                    <div class="Room_Title">자료실</div>
                                    <StudyReference studyId={this.props.match.params.study_id}/>
                                </div>
                                <div id="StudySchedule">
                                    <div class="Room_Title">스터디 일정</div>
                                    <div class="Room_Content">
                                        <StudySchedule token={this.getToken()} study_id={this.props.match.params.study_id} calendar_id={item.calendarId}/>
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