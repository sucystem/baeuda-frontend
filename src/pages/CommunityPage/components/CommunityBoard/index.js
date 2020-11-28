import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

function CommunityBoard(){
    let history = useHistory();
    return <div id="community_board">
        <table>
            <thead>
                <th width = "5%">제목</th>
                <th width = "70%">작성자</th>
                <th width = "10%">조회수</th>
                <th width = "15%">작성 시간</th>
            </thead>
            <tbody>
            <tr>
                <td>노트북 추천</td>
                <td>송혜민</td>
                <td>21</td>
                <td>2020-11-29</td>
            </tr>
            <tr>
                <td>노트북 추천</td>
                <td>송혜민</td>
                <td>21</td>
                <td>2020-11-29</td>
            </tr>
            </tbody>
        </table>
        <button className="btn_new_post">새 글 작성</button>
    </div>

}

export default CommunityBoard;