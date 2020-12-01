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
        const {lecture_id} = this.props.match.params;
        callAPI(`lecture/${lecture_id}/info`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true') {
                this.setState({
                    lecture: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
        })
    }

    componentDidMount() {
        this.getLecture();
    }

    render() {
        let history = this.props.history;
        return <div id="LecClass">
            <div id="SubjectName">{this.state.lecture.name}</div>
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