import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class ProjectRecruit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: []
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
        callAPI(`project/recruit_list`, 'POST', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    post: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    handleSubmitJoin = async (event) => {
        const Project_id = event.target;
        event.preventDefault();
        try {
            if (this.state.comment) {
                callAPI(`project/${Project_id}/joinProject`, 'POST', { ...this.getToken() }, null).then(res => {
                    if (res.data.msg === '가입 신청을 성공했습니다.') {
                        window.location.reload();
                    } else {
                        alert(res.data.msg);
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getPosts();
    }

    render() {
        let history = this.props.history;
        return<div id="ProjectRecruit">
        <ul>
            {
                this.state.post.map((item, index) =>{
                    return (
                        <li>
                            <div class="boardName" onClick={() => history.push("/Project/ProjectInfo")}>{item.recruitTitle}</div>
                            <div class="boardMember">{item.currentSeat}/{item.maxSeat}</div>
                            <div class="boardJoin"><input type="submit" name={item.projectid} value="신청" onClick={(event) => this.handleSubmitJoin(event)}/></div> 
                            <div class="boardInfo" onClick={() => history.push("/Project/ProjectInfo/" + item.projectid)}>정보보기</div>
                        </li>
                    )
                })
            }
        </ul>
        <div id="MakeProject" onClick={() => history.push("/project/MakeProject") }>스터디 만들기</div>
    </div>
    }
}

export default ProjectRecruit;