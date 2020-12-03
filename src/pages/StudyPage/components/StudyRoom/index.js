import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';
import StudySchedule from '../StudySchedule';
import StudyReference from '../studyReference';
import StudyMemberManageModal from '../../StudyMemberManageModal/StudyMemberManageModal';


class StudyRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            study: [],
            reference: [],
            schedule: [],
            isModalOpen: false,
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = () => {
        const { study_id } = this.props.match.params;
        callAPI(`study/info/${study_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    study: res.data.data[0]
                });
            } else {
                alert(res.data.msg)
            }
        });

        // callAPI(`study/reference/${study_id}`, 'GET', {...this.getToken()}, null).then(res => {
        //     if(res.data.result === 'true'){
        //         this.setState ({
        //             reference: res.data.data
        //         })
        //     } else {
        //         alert(res.data.msg)

        //     }            
        // });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.getPosts();
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        let history = this.props.history;
        return (<div>
                    <div id="StudyRoom">
                        <div id="StudyName">{this.state.study.name}</div>
                            <div>
                                <a href={this.state.study.link} className="container-meeting-room" target='_blank'><div id="btnMeetingRoom">미팅룸 입장</div></a>
                                <div id="btnTeamPeopleManage" onClick={this.openModal}>팀원 관리</div>
                            </div>
                            <div id="StudyContent">
                                <div id="StudyReference">
                                    <div class="Room_Title">자료실</div>
                                    <StudyReference studyId={this.props.match.params.study_id}/>
                                </div>
                                <div id="StudySchedule">
                                    <div class="Room_Title">스터디 일정</div>
                                    <div class="Room_Content">
                                        <StudySchedule token={this.getToken()} study_id={this.props.match.params.study_id} calendar_id={this.state.study.calendarId}/>
                                    </div>
                               </div>
                            </div>
                        <StudyMemberManageModal study_id={this.props.match.params.study_id} token={this.getToken()} isOpen={this.state.isModalOpen} close={this.closeModal} />
                    </div>
                )
                
            )
            
        </div>)
    }
}
export default StudyRoom;