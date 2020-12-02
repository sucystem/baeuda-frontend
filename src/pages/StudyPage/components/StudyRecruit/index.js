import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller';
import moment from 'moment';

class StudyRecruit extends Component{
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
        callAPI(`study/recruit`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    post: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            console.log(res);
        });
    }

    handleSubmitJoin = (study_id) => () => {
        callAPI(`study/apply/${study_id}`, 'POST', { ...this.getToken() }, null).then(res => { // TO-DO : Edit URL
            if (res.data.msg === '가입 신청을 성공했습니다.') {
                window.location.reload();
            } else {
                alert(res.data.msg);
            }
            console.log(res);
        });
       
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getPosts();
    }

    render() {
        let history = this.props.history;
        return<div id="StudyRecruit">
        <ul>
            {
                this.state.post.map((item, index) =>{
                    console.log(item)
                    return (
                        <li>
                            <div class="boardName" onClick={() => history.push("/study/StudyInfo")}>{item.recruitTitle}</div>
                            <div class="boardMember">{item.currentSeat}/{item.maxSeat}</div>
                            <div class="boardJoin" onClick={this.handleSubmitJoin(item.id)}>신청</div> 
                            <div class="boardInfo" onClick={() => history.push("/study/StudyInfo/" + item.studyid)}>정보보기</div>
                        </li>
                    )
                })
            }
        </ul>
        <div id="MakeStudy" onClick={() => history.push("/study/MakeStudy") }>스터디 만들기</div>
    </div>
    }
}

export default StudyRecruit;