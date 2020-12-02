import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment');

class AssignmentInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            assignment_id: this.props.match.params.assignment_id,
            post: [],
            delete: "",
            files: [],
        }
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.readPost();
    }


    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    handleDelete = async (event) =>{
        event.preventDefault();
        try{
            const data ={
                boardId: this.state.board_id,
                postId: this.state.post_id
            }
            callAPI('assignment/delete/post', 'POST', { ...this.getToken()}, data).then(res => {
                if(res.data.result === 'true'){
                    this.props.history.push(`community/${this.state.board_id}`);
                } else {
                    alert(res.data.msg);
                }
            })
        }catch(e){
            console.log(e);
        }
    }

    handleDownloadFile = async (event) => {
        event.preventDefault();
        var { name } = event.target;
        const link = document.createElement('a');
        link.href = `${process.env.REACT_APP_SERVER_API}/download/${name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    readPost = async () => {
        const { post_id } = this.state;
        try {
            await callAPI(`assignment/post/${post_id}`, 'POST', { ...this.getToken() }, null).then(res => {
                if (res.data.result === 'true') {
                    this.setState({
                        post: res.data.data.post,
                        files: res.data.data.files
                    });
                    if(res.data.data.post[0].writer == (JSON.parse(localStorage.getItem('user'))).id){
                        this.setState({
                            delete: <span id="delete" onClick={(event) => this.handleDelete(event)}>[삭제]</span>
                        })
                    }
                } else {
                    alert(res.data.msg);
                }
            });
            console.log(this.state);
        } catch (e) {
            console.log(e);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        let history = this.props.history;
        return <div id="community-post-detail">
            {this.state.post.map((contact, i) => {
                return (<div><div id="title-writer-date">
                    <p className="title">{contact.title}</p>
                    <p>
                        <span className="writer">{contact.user_name}</span>
                &nbsp;
                <span className="date">{moment(contact.regDate).format("YYYY-MM-DD")}</span>
                {this.state.delete}   
                    </p>
                </div>
            <div id="content">
                <p>{contact.content}</p>
            </div></div>
                );
            }
            )}
            
            <div id="head-comment">첨부파일</div>
            {this.state.files.map((file) => {
                return (
                    <>
                    <a name={file.path + '/' + file.name} onClick={(event) => this.handleDownloadFile(event)}>{file.name}</a>&nbsp;
                    </>
                );
            })}
        </div>
    }
}

export default AssignmentInfo;

