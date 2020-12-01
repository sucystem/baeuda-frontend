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
            study_list: [],
            study_schedule : [],
            study_recruit : []
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
        callAPI(`study/main`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    study_list : res.data.data.row1,
                    study_schedule : res.data.data.row2,
                    study_recruit : res.data.data.row3
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
        return <div id="studyMain">
            <div id="studyList" class="menu_box">
                <div class="box_head" onClick={() => history.push("/StudyList") }>스터디 목록</div>
                <div>
                    <ul>
                        {   
                            this.state.study_list.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/studyRoom/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div id="studySchadule" class="menu_box">
                <div class="box_head" onClick={() => history.push("/study/StudySchedule") }>스터디 일정</div>
                <div>
                    <ul>
                        {   
                            this.state.study_schedule.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/schedule/" + item.id)}>
                                        <div>{item.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div id="studyRecruit" class="menu_box">
                <div class="box_head" onClick={() => history.push("/study/StudyRecruit") }>스터디 모집</div>
                <div>
                    <ul>
                        {   
                            this.state.study_recruit.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => history.push("/studyRoom/" + item.id)}>
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