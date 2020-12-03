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
            project_list: [],
            project_schedule : [],
            project_recruit : []
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
                    project_list : res.data.data.row1,
                    project_schedule : res.data.data.row2,
                    project_recruit : res.data.data.row3
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
        return <div id="projectMain">
            <div id="projectList" class="menu_box">
                <div class="box_head" onClick={() => history.push("project/ProjectList") }>프로젝트 목록</div>
                <div>
                    <ul>
                        {   
                            this.state.project_list.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/project/projectRoom/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div id="projectRecruit" class="menu_box">
                <div class="box_head" onClick={() => history.push("/project/ProjectRecruit") }>프로젝트 모집</div>
                <div>
                    <ul>
                        {   
                            this.state.project_recruit.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/project/ProjectRecruit")}>
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
/*            <div id="projectSchadule" class="menu_box">
                <div class="box_head" onClick={() => history.push("/project/ProjectSchedule") }>프로젝트 일정</div>
                <div>
                    <ul>
                        {   
                            this.state.project_schedule.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/project/ProjectSchedule/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>*/

export default Main;