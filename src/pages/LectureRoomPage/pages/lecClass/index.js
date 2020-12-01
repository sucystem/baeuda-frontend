import React, { Component } from 'react'
import './lecClass.scss'
import callAPI from '../../../../_utils/apiCaller'

class LectureClass extends Component {
    constructor(props) {
        super(props);

        const { lecture_id } = this.props.match.params;
        this.state = {
            lecture_id: lecture_id,
            lecture: [],
            lessons: []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getLecture = async () => {
        const lecture_id = this.state.lecture_id;
        callAPI(`lecture/info/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lecture: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
        })
    }

    getLessons = async () => {
        const lecture_id = this.state.lecture_id;
        callAPI(`lecture/lessons/${lecture_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lessons: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
        })
    }

    componentDidMount() {
        this.getLecture();
        this.getLessons();
    }

    render() {
        let history = this.props.history;
        return <div id="LecClass">
            <div id="SubjectName">{this.state.lecture.name}</div>
            <div id="SubjectProgression">
                <ul>
                    {this.state.lessons.map((lesson, i) => {
                        return (
                            <li className="classInfo">
                                <div className="classIndex">{i+1}강</div>
                                <div className="ProgressionFullBar"><div className="ProgressionBar" style={{width: `${lesson.progress}%`}}/></div>
                                <div className="ProgressionPercent">{lesson.progress}%</div>
                                <a href={lesson.link} target='_blank'><div className="TakeCourse">수강하기</div></a>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </div>
    }
}

export default LectureClass;