import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller'

class CommunityPostDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board_id: this.props.match.params.board_id,
            post_id: this.props.match.params.post_id,
            post: [],
            comment: "",
            commentList: [],
        }

        this.readPost();
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
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
                } else {
                    alert(res.data.msg);
                }
            });
            /*await callAPI(`board/${board_id}/${post_id}/comments`, 'GET', { ...this.getToken() }, null).then(res => {
                if (res.data.msg === '댓글 목록을 읽었습니다.') {
                    this.setState({
                        commentList: res.data.data
                    })
                } else {
                    alert(res.data.msg);
                }
            });*/
            console.log(this.state);
            this.render();
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
                    <p className="title">{contact.title}</p>
                    <p>
                        <span className="writer">{contact.user_name}</span>
                &nbsp;
                <span className="date">{contact.regDate}</span>
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
                            <p className="comment-date">{contact.date}</p>
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

