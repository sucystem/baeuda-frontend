import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

const content = "어제 과제를 너무 늦게까지 했다 싶긴했는데…\n일어나니까 시간이 이미…\n지각 성적에 영향 클까요..?";

function CommunityPostDetail(){
    let history = useHistory();
    return <div id="community-post-detail">
        <div id="title-writer-date">
            <p className="title">지각했당</p>
            <p>
                <span className="writer">박승운</span>
                &nbsp;
                <span className="date">2020.10.21 12:10:35</span>
            </p>
        </div>

        <div id="content">
            <p>{content}</p>
        </div>

        <div id="head-comment">덧글</div>
        <div className="comments">
            <div className="comment">
                <p>
                    <span className="comment-writer">박승운</span>
                    &nbsp;
                    <span className="comment-content">미리 해둘걸!!!</span>
                </p>
                <p className="comment-date">2020.10.21 12:10:35</p>
            </div>
            <div className="comment">
                <p>
                    <span className="comment-writer">박승운</span>
                    &nbsp;
                    <span className="comment-content">미리 해둘걸!!!</span>
                </p>
                <p className="comment-date">2020.10.21 12:10:35</p>
            </div>
            <div className="comment">
                <p>
                    <span className="comment-writer">박승운</span>
                    &nbsp;
                    <span className="comment-content">미리 해둘걸!!!</span>
                </p>
                <p className="comment-date">2020.10.21 12:10:35</p>
            </div>
            <div className="comment-register">
                <form>
                    <input type="text" placeholder="덧글을 작성하세요..." />
                    <input type="submit" value="덧글 등록" />
                </form>
            </div>
        </div>
    </div>

}

export default CommunityPostDetail;

