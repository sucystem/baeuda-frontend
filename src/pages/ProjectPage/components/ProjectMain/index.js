import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class Main extends Component {
    constructor(props) {
        super(props);

        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.state = {
            Project_list: [],
            Project_schedule : [],
            Project_recruit : []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = async() => {
        const boardId = this.props.match.params.board_id;
        callAPI(`project/main`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    Project_list : res.data.data.row1,
                    Project_schedule : res.data.data.row2,
                    Project_recruit : res.data.data.row3
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        let history = this.props.history;
        return <div id="ProjectMain">
            <div id="ProjectList" class="menu_box">
                <div class="box_head" onClick={() => history.push("/ProjectList") }>스터디 목록</div>
                <div>
                    <ul>
                        {   
                            this.state.Project_list.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/project/ProjectRoom/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div id="ProjectSchadule" class="menu_box">
                <div class="box_head" onClick={() => history.push("/project/ProjectSchedule") }>스터디 일정</div>
                <div>
                    <ul>
                        {   
                            this.state.Project_schedule.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("project/ProjectSchedule/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div id="ProjectRecruit" class="menu_box">
                <div class="box_head" onClick={() => history.push("/project/ProjectRecruit") }>스터디 모집</div>
                <div>
                    <ul>
                        {   
                            this.state.Project_recruit.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/project/ProjectRoom/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    }
}

export default Main;