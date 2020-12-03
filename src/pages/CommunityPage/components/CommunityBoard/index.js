import React, {Component} from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class CommunityBoard extends Component{
    constructor(props) {
        super(props);
                this.state = {
            posts: [],
            admin: false
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
        callAPI(`board/${boardId}`, 'GET', {...this.getToken()}, null).then(res => {
            // if (res.data.msg === '게시글 등록에 성공했습니다.'){
            //     this.props.history.push(`/community/${boardId}`)
            // } else {
            //     alert(res.data.msg)
            // }
            if(res.data.result === 'true'){
                this.setState ({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        if(JSON.parse(localStorage.getItem('user')).level == 3){
            this.state.admin = true;
        }
        this.getPosts();
    }

    
    
    render() {
        let history = this.props.history;
        return (<div id="community_board">
        <table>
            <thead>
                <th width = "70%">제목</th>
                <th width = "10%">작성자</th>
                <th width = "5%">조회수</th>
                <th width = "15%">작성 시간</th>
            </thead>
            <tbody>
                {
                    this.state.posts.map((item, index) => {
                        return (
                            <tr key = {index} onClick={() => history.push(`/community/${this.props.match.params.board_id}/postdetail/`+item.id)}>
                                <td>{item.title}</td>
                                <td>{item.user_name}</td>
                                <td>{item.count}</td>
                                <td>{moment(item.regDate).format("YYYY-MM-DD")}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {this.state.admin && <button className="btn_new_post" onClick={() => history.push(`/community/${this.props.match.params.board_id}/newpost`) }>새 글 작성</button>}
    </div>)
    }
    

}

export default CommunityBoard;