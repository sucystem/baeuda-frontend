import React, { Component } from 'react'
import './myLecture.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller'

class MyLecture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: [],
            error: ""
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getMyLectures = async () => {
        callAPI(`lecture`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                })
            } else {
                this.setState({
                    error: res.data.msg
                });
            }
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        /*if(JSON.parse(localStorage.getItem('user')).level == 2){
            window.location.replace('/myLecture/manage');
        }*/
        this.getMyLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLecture">
            <div id="SubjectName">수강중 강의</div><br/>
            <div id="myLectureRoom">
                {this.state.lectures.map((lecture, i) => {
                    return (
                        <div class="lec_room_box">
                            <div class="lec_box_name">
                                <div class="lec_box_subject">{lecture.name}</div>
                                <div class="lec_box_prof">{lecture.user_name}</div>
                            </div>
                            <div class="lec_box_button" onClick={() => history.push(`/lectureroom/${lecture.id}/${lecture.id}`)}>입장</div>
                        </div>
                    );
                })
                }
                {this.state.error}
            </div>
        </div>
    }
}

export default MyLecture;