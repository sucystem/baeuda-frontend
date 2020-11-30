import React, {Component} from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import callAPI from '../../../../_utils/apiCaller';

class CommunityBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
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
                console.log(res.data)
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
        return <div id="community_board">
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
                            <tr>
                                <td>노트북 추천</td>
                                <td>송혜민</td>
                                <td>21</td>
                                <td>2020-11-29</td>
                            </tr>
                        )
                    })
                }
            
            <tr>
                <td>노트북 추천</td>
                <td>송혜민</td>
                <td>21</td>
                <td>2020-11-29</td>
            </tr>
            </tbody>
        </table>
        <button className="btn_new_post" onClick={() => history.push("/community/2/newpost") }>새 글 작성</button>
    </div>
    }
    

}

export default CommunityBoard;