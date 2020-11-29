import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './header.css'
import { useHistory } from 'react-router-dom';

function Header() {
    let history = useHistory();
    var username = localStorage.getItem('user');
    return <header id="MyPageHeader">
        <div id="MyPage">
            <div class="header_my_menu">
                {username}님, 오늘도 열공해요!
            </div>
            <div class="header_my_menu">
                마이페이지
            </div>
            <div class="header_my_menu">
                로그아웃
            </div>
        </div>
        <a href="" onClick={() => history.push("/main")} id="main_icon"><img src = {logo} alt={"logo"}/></a>
        <div id="menu_bar">
            <ul>
                <li onClick={() => history.push("/myLecture")}>내 강의</li>
                <li onClick={() => history.push("/signup")}>내 스터디</li>
                <li onClick={() => history.push("/signup")}>팀 프로젝트</li>
                <li onClick={() => history.push("/signup")}>내 일정</li>
                <li onClick={() => history.push("/signup")}>커뮤니티</li>
            </ul>
        </div>
    </header>;
}

export default Header;