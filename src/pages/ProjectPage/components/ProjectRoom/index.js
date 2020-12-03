import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';
import ProjectSchedule from '../ProjectSchedule';
import ProjectReference from '../projectReference';
import ProjectMemberManageModal from '../../ProjectMemberManageModal/ProjectMemberManageModal';


class ProjectRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: [],
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
        const { project_id } = this.props.match.params;
        callAPI(`project/info/${project_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    project: res.data.data[0]
                });
            } else {
                alert(res.data.msg)
            }
        });

        // callAPI(`project/reference/${project_id}`, 'GET', {...this.getToken()}, null).then(res => {
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
                    <div id="ProjectRoom">
                        <div id="ProjectName">{this.state.project.name}</div>
                            <div>
                                <a href={this.state.project.link} className="container-meeting-room" target='_blank'><div id="btnMeetingRoom">미팅룸 입장</div></a>
                                <div id="btnTeamPeopleManage" onClick={this.openModal}>팀원 관리</div>
                            </div>
                            <div id="ProjectContent">
                                <div id="ProjectReference">
                                    <div class="Room_Title">자료실</div>
                                    <ProjectReference projectId={this.props.match.params.project_id}/>
                                </div>
                                <div id="ProjectSchedule">
                                    <div class="Room_Title">프로젝트 일정</div>
                                    <div class="Room_Content">
                                        <ProjectSchedule token={this.getToken()} project_id={this.props.match.params.project_id} calendar_id={this.state.project.calendarId}/>
                                    </div>
                               </div>
                            </div>
                        <ProjectMemberManageModal project_id={this.props.match.params.project_id} token={this.getToken()} isOpen={this.state.isModalOpen} close={this.closeModal} />
                    </div>
                )
                
            )
            
        </div>)
    }
}
export default ProjectRoom;