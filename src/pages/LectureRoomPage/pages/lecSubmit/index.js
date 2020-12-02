import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import callAPI from '../../../../_utils/apiCaller';

class LectureNewAssignment extends Component {
    constructor(props) {
        super(props);
        const { lecture_id } = this.props.match.params;
        const { assignment_id } = this.props.match.params;
        this.state = {
            lecture_id: lecture_id,
            assignment_id : assignment_id,
            title: "", 
            content: "",
            file: [],
            lecture: {}
        }
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getLecture();
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
            console.log(this.state);
        })
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
            if(document.getElementById('upload-file-name').value !== '')
                document.getElementById('upload-file-name').value += ', ';
            document.getElementById('upload-file-name').value += event.target.files[0].name;
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
                const lecture_id = this.props.match.params.lecture_id;
                const assignment_id = this.props.match.params.assignment_id;
                let formData = new FormData();

                const data = {
                    lectureId: lecture_id,
                    assignment_id : assignment_id,
                    title: title,
                    content: content
                }
                for(let i = 0; i < file.length; i++){
                   formData.append('file', file[i]);
                }
                formData.append('lectureId', lecture_id);
                formData.append('assignment_id', assignment_id);
                formData.append('board', this.props.match.params.board);
                formData.append('title', title);
                formData.append('content', content);
                callAPI(`lecture/submit`, 'POST', { ...this.getToken() }, formData).then(res => {
                    if (res.data.result === 'true'){
                        this.props.history.push(`/lectureroom/${lecture_id}/${lecture_id}/assignment`)
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
            <div id="SubjectName">{this.state.lecture.name} - 과제제출</div><br/>
            <form method="post" onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="글 제목" onChange={event => this.handleChange(event)} />
                <textarea name="content" placeholder="글 내용" onChange={event => this.handleChange(event)} />
                <div className="container-file-upload">
                    <input disabled type="text" id="upload-file-name" placeholder="파일 첨부" />
                    <button className="btn_file_upload" onClick={(event) => this.handleClickAddFile(event)}>파일 선택</button>
                </div>
                <div className="container-submit">
                    <input type="submit" value="올리기" onClick={(event) => this.handleSubmit(event)} />
                </div>
            </form>
        </div>
    }
}

export default LectureNewAssignment;