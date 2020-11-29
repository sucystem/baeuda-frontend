import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

function CommunityNewPost(){
    let history = useHistory();
    return <div id="community-post">
        <form>
            <input type="text" placeholder="글 제목" />
            <textarea placeholder="글 내용" />
            <div className="container-file-upload">
                <input disabled type="text" id="upload-file-name" placeholder="파일 첨부" />
                <button className="btn_file_upload">파일 선택</button>
            </div>
            <div className="container-submit">
                <input type="submit" value="올리기"/>
            </div>
        </form>
    </div>

}

export default CommunityNewPost;