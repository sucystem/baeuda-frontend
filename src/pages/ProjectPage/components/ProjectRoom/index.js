import React, {Component} from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class ProjectRoom extends Component{
    constructor(props) {
        super(props);
                this.state = {
            posts: [],
            reference : [],
            schedule : []
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = async() => {
        const Project_id = this.props.match.params.project_id;
        callAPI(`project/${Project_id}`, 'POST', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg)
            }            
        });
        callAPI(`project/${Project_id}/reference`, 'POST', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    reference: res.data.data
                })
            } else {
                alert(res.data.msg)
            }            
        });
        callAPI(`project/${Project_id}/schedule`, 'POST', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    schedule: res.data.data
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
        return(<div>
            {
                this.state.posts.map((item) => {
                    return(
                        <div id="ProjectRoom">
                        <div id="ProjectName">{item.name}</div>
                        <div id="ProjectContent">
                            <div id="ProjectReference">
                                <div class="Room_Title">자료실</div>
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
                            <div id="ProjectSchedule">
                                <div class="Room_Title">스터디 일정</div>
                                <div class="Room_Content">
                                    <ul>
                                        {
                                            this.state.schedule.map((sche) => {
                                                return (
                                                    <li>
                                                        <div class="ScheName">{sche.name}</div>
                                                        <div class="ScheDate">{sche.date}</div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }
            )
        }
    </div>)}
}
export default ProjectRoom;