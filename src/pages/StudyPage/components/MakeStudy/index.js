import React, { Component } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import callAPI from '../../../../_utils/apiCaller';

class MakeStudy extends Component{
    constructor(props) {
        super(props);
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.state = {
            title: "", 
            content: "",
            file: []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var { title, content, file } = this.state;
        try {
            if (this.state.title && this.state.content) {
                const boardId = this.props.match.params.board_id;
                const path = this.props.match.path;

                const data = {
                    title: title,
                    content: content
                }
                callAPI(`board/${boardId}/newPost`, 'POST', {...this.getToken()}, data).then(res => {
                    if (res.data.result === 'true'){
                        this.props.history.push(`/community/${boardId}/postdetail/${res.data.postid}`)
                    } else {
                        alert(res.data.msg)
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        let history = this.props.history;
        return <div id="MakingStudy">
        <div class="StudyInfo">
            <div class="StudySubject"><input id="StudySubject" type="text" name="StudySubject" required></input></div>
            <div class="BoardName"><input id="StudyName" type="text" name="StudyName" required></input></div>
            <div class="StudyMember"><input id="StudyMember" type="text" name="StudyMember" required></input></div>
        </div>
        <div class="StudyContent"><input id="StudyContent" type="text" name="StudyContent" required></input></div>
        <div class="StudyAdd">올리기</div>
    </div>
    }

}

export default MakeStudy;