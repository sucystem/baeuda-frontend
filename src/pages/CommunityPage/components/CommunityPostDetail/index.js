import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller'
const moment = require('moment');

class CommunityPostDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            board_id: this.props.match.params.board_id,
            post_id: this.props.match.params.post_id,
            post: [],
            comment: "",
            commentList: [],
            delete: ""
        }

        this.readPost();
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
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
            callAPI('board/delete/post', 'POST', { ...this.getToken()}, data).then(res => {
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

    handleDeleteComment = async (event) => {
        event.preventDefault();
        const {id} = event.target;
        try{
            const data ={
                commentId: id
            }
            callAPI('board/delete/comment', 'POST', { ...this.getToken()}, data).then(res => {
                if(res.data.result === 'true'){
                    window.location.reload();
                } else {
                    alert(res.data.msg);
                }
            })
        }catch(e){
            console.log(e);
        }
    }

    readPost = async () => {
        const { board_id, post_id } = this.state;
        try {
            await callAPI(`board/${board_id}/post/${post_id}`, 'GET', { ...this.getToken() }, null).then(res => {
                if (res.data.result === 'true') {
                    this.setState({
                        post: res.data.data.post,
                        commentList: res.data.data.comments
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
            /*await callAPI(`board/${board_id}/${post_id}/comments`, 'GET', { ...this.getToken() }, null).then(res => {
                if (res.data.msg === '댓글 목록을 읽었습니다.') {
                    this.setState({
                        commentList: res.data.data
                    })
                } else {
                    alert(res.data.msg);
                }
            });*/
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

    handleSubmitComment = async (event) => {
        event.preventDefault();
        var { comment, board_id, post_id } = this.state;

        try {
            const data = {
                comment: comment
            }
            if (this.state.comment) {
                callAPI(`board/${board_id}/${post_id}/addcomment`, 'POST', { ...this.getToken() }, data).then(res => {
                    if (res.data.msg === '댓글 등록에 성공했습니다.') {
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

    render() {
        let history = this.props.history;
        return <div id="community-post-detail">
            {this.state.post.map((contact, i) => {
                return (<div><div id="title-writer-date">
                    <p className="title">{contact.title}
                    </p>
                    
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


            <div id="head-comment">덧글</div>
            <div className="comments">
                {this.state.commentList.map((contact, i) => {
                    return (
                        <div className="comment">
                            <p>
                                <span className="comment-writer">{i + 1} {contact.user_name}</span>
                    &nbsp;
                    <span className="comment-content">{contact.content}</span>
                            </p>
                            <p className="comment-date">{moment(contact.date).format("YYYY-MM-DD")}
                            <span id={contact.id} onClick={(event) => this.handleDeleteComment(event)}>{contact.delete}</span></p>
                        </div>
                    );
                })}

                <div className="comment-register">
                    <form method="post" onSubmit={this.handleSubmitComment}>
                        <input type="text" name="comment" placeholder="덧글을 작성하세요..." onChange={(event) => this.handleChange(event)} />
                        <input type="submit" value="덧글 등록" onClick={(event) => this.handleSubmitComment(event)} />
                    </form>
                </div>
            </div>
        </div>
    }
}

export default CommunityPostDetail;

