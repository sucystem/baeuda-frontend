import React, { Component } from 'react'
import './lecClass.css'
import callAPI from '../../../../_utils/apiCaller'

class LectureClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lecture: []
        }
    }
    
    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getLecture = async () => {

    }

    render() {
        let history = this.props.history;
        return <div id="LecClass">
            <div id="SubjectName">소프트웨어공학개론</div>
            <div id="SubjectProgression">
                <ul>
                    <li class="classInfo">
                        <div class="classIndex">1강</div>
                        <div class="ProgressionBar"></div>
                        <div class="ProgressionPercent">100%</div>
                        <div class="TakeCourse">수강하기</div>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default LectureClass;