import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let history = this.props.history;
        return <div id="studyMain">
            <div id="studyList" class="menu_box">
                <div class="box_head" onClick={() => history.push("/StudyList") }>스터디 목록</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="studySchadule" class="menu_box">
                <div class="box_head" onClick={() => history.push("/StudySchedule") }>스터디 일정</div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="studyRecruit" class="menu_box">
                <div class="box_head" onClick={() => history.push("/StudyRecruit") }>스터디 모집</div>
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