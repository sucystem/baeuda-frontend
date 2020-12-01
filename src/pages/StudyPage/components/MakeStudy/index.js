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
            name: "", 
            recruitTitle: "",
            maxseat:"",
            recruitContent:""
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var { name, recruitTitle, maxseat,recruitContent } = this.state;
        try {
            if (this.state.name && this.state.recruitTitle &&this.state.maxseat && this.state.recruitContent) {
                const data = {
                    name: name, 
                    recruitTitle: recruitTitle,
                    maxseat : maxseat,
                    recruitContent: recruitContent
                }
                callAPI(`study/new_study`, 'POST', {...this.getToken()}, data).then(res => {
                    if (res.data.result === 'true'){
                        this.props.history.push(`/study/StudyRoom/${res.data.studyid}`)
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
            <form method="post" onSubmit={this.handleSubmit}>
                <div class="StudyInfo">
                    <div class="StudySubject"><input id="StudySubject" type="text" name="name" placeholder="스터디 제목"required onChange={event => this.handleChange(event)} /></div>
                    <div class="BoardName"><input id="StudyName" type="text" name="recruitTitle" placeholder="구인글 제목"required onChange={event => this.handleChange(event)}/></div>
                    <div class="StudyMember"><input id="StudyMember" type="text" name="maxSeat" placeholder="스터디 정원"required onChange={event => this.handleChange(event)}/></div>
                </div>
                <div class="StudyContent"><input id="StudyContent" type="text" name="recruitContent" placeholder="구인글 내용" required onChange={event => this.handleChange(event)}/></div>
                <div class="StudyAdd" onClick={(event) => this.handleSubmit(event)}>올리기</div>
            </form>    
        </div>
    }

}

export default MakeStudy;