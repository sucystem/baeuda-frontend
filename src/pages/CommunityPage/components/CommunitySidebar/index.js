import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

function CommunitySidebar(){
    let history = useHistory();
    return <div id="community_side_bar">
        <ul>
            <li style={{color: "#22a7f0"}}>자유게시판</li>
        {/*    기능 돌아가기만 하면 되니까 하나만 만듬 */}
        </ul>
    </div>
}

export default CommunitySidebar;