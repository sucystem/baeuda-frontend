import React, { Component } from 'react'
import './myLecture.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller'

class MyLecture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getMyLectures = async () => {
        const boardId = this.props.match.params.board_id;
        callAPI(`lecture`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getMyLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLecture">
            <div id="myLectureRoom">
                {this.state.lectures.map((lecture, i) => {
                    return (
                        <div class="lec_room_box">
                            <div class="lec_box_name">
                                <div class="lec_box_subject">{lecture.name}</div>
                                <div class="lec_box_prof">{lecture.user_name}</div>
                            </div>
                            <div class="lec_box_button" onClick={() => history.push(`/lectureroom/${lecture.id}`)}>입장</div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    }
}

export default MyLecture;