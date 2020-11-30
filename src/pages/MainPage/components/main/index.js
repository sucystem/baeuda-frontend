import React, {Component} from 'react'
import './main.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: []
        }
    }
    
    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getTodaySchedule = async () => {
        const res = await callAPI(
            `schedule/today`, 
            'GET', 
            { ...this.getToken() }, 
            null,
        );

        if(res.data.result === 'true') {
            this.setState({
                schedule: res.data.data
            });
        }
    }

    componentDidMount() {
        this.getTodaySchedule();
    }

    render() {
        let history = this.props.history;
        return <div id="main">
            <div id="notice" class="menu_box">
                <div class="box_head">공지사항</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="schadule" class="menu_box">
                <div class="box_head">오늘의 일정</div>
                <div>
                    <ul>
                        {this.state.schedule.map((schedule) => {
                            return (
                                <li>{schedule.title}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div id="assignment" class="menu_box">
                <div class="box_head">과제</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>

    }
}

export default Main;