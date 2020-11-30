import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import './style.scss'
import { boardActions } from "../../../../_actions"
import callAPI from '../../../../_utils/apiCaller';

class CommunityNewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "", 
            content: "",
            file: []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return {
            auth_token: token,
            user: user
        }
    }

    handleClickAddFile = (event) => {
        event.preventDefault();
        const file = document.createElement('input');
        file.setAttribute("type", "file");
        file.setAttribute("name", "file");
        document.body.appendChild(file);
        file.click();
        file.onchange = this.handleChange;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "file") {
            this.setState({
                file : [...this.state.file, event.target.files[0]]
            })
        } else {
            this.setState({
                [name] : value
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var { title, content, file } = this.state;
        try {
            if (this.state.title && this.state.content) {
                const boardId = this.props.match.params.board_id;
                const path = this.props.match.path;
                //var formData = new FormData();

                const data = {
                    title: title,
                    content: content
                }

                /*for(let i = 0; i < file.length; i++){
                    formData.append('file', file[i]);
                }*/

                //callAPI(`board/${boardId}/newPost`, 'POST', { ...this.getToken(), ...{ 'content-Type': 'multipart/form-data' } }, data).then(res => {
                callAPI(`board/${boardId}/newPost`, 'POST', {...this.getToken()}, data).then(res => {
                    if (res.data.result === 'true'){
                        this.props.history.push(`/community/${boardId}`)
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
        return <div id="community-post">
            <form method="post" onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="글 제목" onChange={event => this.handleChange(event)} />
                <textarea name="content" placeholder="글 내용" onChange={event => this.handleChange(event)} />
                <div className="container-file-upload">
                    <input disabled type="text" id="upload-file-name" placeholder="파일 첨부" />
                    <button className="btn_file_upload" onclick={(event) => this.handleClickAddFile(event)}>파일 선택</button>
                </div>
                <div className="container-submit">
                    <input type="submit" value="올리기" onclick={(event) => this.handleSubmit(event)} />
                </div>
            </form>
        </div>
    }
}

export default CommunityNewPost;