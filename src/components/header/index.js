import React, { Component } from 'react'
import logo from '../../assets/images/logo.jpg'
import './header.css'
import callAPI from '../../_utils/apiCaller';
import {Link} from 'react-router-dom'
import { connect } from "react-redux"

class Header extends Component {
    constructor(props){
        super(props);
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            // this.props.history.push('/')
        }
    }
    handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        callAPI('users/logout','GET',null,null).then(res=>{})
    }

    render() {
        let history = this.props.history;
        return <header id="MyPageHeader">
            <div id="MyPage">
                <div className="header_my_menu">
                    {this.props.user_name}님, 오늘도 열공해요!
            </div>
                <div className="header_my_menu">
                    마이페이지
            </div>
                <div className="header_my_menu">
                    <Link onClick = {() => this.handleLogout()} to = "/">로그아웃</Link>
            </div>
            </div>
            <a href="" onClick={() => history.push("/main")} id="main_icon"><img src={logo} alt={"logo"} /></a>
            <div id="menu_bar">
                <ul>
                    <li onClick={() => history.push("/myLecture")}>내 강의</li>
                    <li onClick={() => history.push("/study")}>내 스터디</li>
                    <li onClick={() => history.push("/project")}>팀 프로젝트</li>
                    <li onClick={() => history.push("/myschedule")}>내 일정</li>
                    <li onClick={() => history.push("/community")}>커뮤니티</li>
                </ul>
            </div>
        </header>;
    }
}

const mapStateToProps = (state) =>{
    const { isAccount } = state.user;
    return {
        isAccount: isAccount
    }
}

export default connect(mapStateToProps)(Header);