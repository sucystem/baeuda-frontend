import React, {Component} from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class CommunityBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
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

    getPosts = async() => {
        const boardId = this.props.match.params.board_id;
        callAPI(`board/${boardId}`, 'GET', {...this.getToken()}, null).then(res => {
            // if (res.data.msg === '게시글 등록에 성공했습니다.'){
            //     this.props.history.push(`/community/${boardId}`)
            // } else {
            //     alert(res.data.msg)
            // }
            if(res.data.result === 'true'){
                console.log(res.data);
                this.setState ({
                    posts: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    componentDidMount() {
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
                            <tr key = {index} onClick={() => history.push("/community/2/postdetail/"+item.id)}>
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
        <button className="btn_new_post" onClick={() => history.push("/community/2/newpost") }>새 글 작성</button>
    </div>)
    }
    

}

export default CommunityBoard;