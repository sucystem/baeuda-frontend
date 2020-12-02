import React, { Component } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import callAPI from '../../../../_utils/apiCaller';

class MakeProject extends Component{
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
                callAPI(`project/newProject`, 'POST', {...this.getToken()}, data).then(res => {
                    if (res.data.result === 'true'){
                        this.props.history.push(`/project/ProjectRoom/${res.data.Projectid}`)
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
        return <div id="MakingProject">
            <form method="post" onSubmit={this.handleSubmit}>
                <div class="ProjectInfo">
                    <div class="ProjectSubject"><input id="ProjectSubject" type="text" name="name" placeholder="팀 프로젝트 제목"required onChange={event => this.handleChange(event)} /></div>
                    <div class="BoardName"><input id="ProjectName" type="text" name="recruitTitle" placeholder="구인글 제목"required onChange={event => this.handleChange(event)}/></div>
                    <div class="ProjectMember"><input id="ProjectMember" type="text" name="maxseat" placeholder="팀 프로젝트 정원"required onChange={event => this.handleChange(event)}/></div>
                </div>
                <div class="ProjectContent"><input id="ProjectContent" type="text" name="recruitContent" placeholder="구인글 내용" required onChange={event => this.handleChange(event)}/></div>
                <div class="ProjectAdd" onClick={(event) => this.handleSubmit(event)}>올리기</div>
            </form>    
        </div>
    }

}

export default MakeProject;