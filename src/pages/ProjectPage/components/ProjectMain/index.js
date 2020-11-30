import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let history = this.props.history;
        return <div id="ProjectMain">
            <div id="Main_ProjectList" class="menu_box">
                <div class="box_head" onClick={() => history.push("/ProjectList") }>팀 프로젝트 목록</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="Main_ProjectSchadule" class="menu_box">
                <div class="box_head" onClick={() => history.push("/ProjectSchedule") }>팀 프로젝트 일정</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="Main_ProjectRecruit" class="menu_box">
                <div class="box_head" onClick={() => history.push("/ProjectRecruit") }>팀 프로젝트 모집</div>
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