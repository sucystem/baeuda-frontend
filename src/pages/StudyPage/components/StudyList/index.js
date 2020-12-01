import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class StudyList extends Component{
    constructor(props) {
        super(props);
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.state = {
            posts: []
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
        callAPI(`study/showList`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    render(){
        let history = this.props.history;
        return(<div id="StudyList">
        <div id="studyRoom">
                {
                    this.state.posts.map((item) => {
                        return (
                            <div class="study_room_box">
                                <div class="study_box_name">
                                    {item.name}
                                </div>
                                <div class="study_box_button_enter" onClick={() => history.push("/study/StudyRoom/" + item.id) }>입장</div>
                                <div class="study_box_button_exit"  onClick={() => history.push("/study/StudyRoomExit/" + item.id) }>탈퇴하기</div>
                            </div>
                        )
                    })
                }
        </div>
    </div>)
    }

}

export default StudyList;