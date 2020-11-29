import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

function CommunityBoard(){
    let history = useHistory();
    return <div id="community-post">

        <button className="btn_new_post">새 글 작성</button>

    </div>

}

export default CommunityBoard;