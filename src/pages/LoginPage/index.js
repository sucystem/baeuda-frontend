import React, { Component } from 'react'
import logo from '../../assets/images/logo.jpg'
import './login.scss'
import { userActions } from "../../_actions"
import { connect } from "react-redux"
//import { history } from "../../_heapers/history"

var crypto = require('crypto');

class LoginPage extends Component {
    constructor(props){
        super(props);

        if (localStorage.getItem('token') && localStorage.getItem('user')) {
            this.props.history.push('/main');
        }
        console.log(this.props.history)

        this.state = {
            userid: "", password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        var { userid, password } = this.state;
        try{
            if (this.state.userid && this.state.password) {
                password = await crypto.createHash('sha256').update(password).digest('base64');
                await this.props.login(userid, password);
                this.props.history.push('/main');
            } 
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        return <div className="loginStyle">
            <p className="titleStyle">대학생을위한학습네트워크</p>
            <img src={logo} alt={"logo"} />
            <form action="post" onSubmit={this.handleSubmit}>
                <input type="text" size="20" name="userid" placeholder="아이디" onChange={event => this.handleChange(event)}/>
                <input type="password" size="20" name="password" placeholder="비밀번호" onChange={event => this.handleChange(event)}/>
                <div className="btnBindStyle">
                    <input type="button" className="btnLoginStyle" name="login" value="로그인" onClick={event => this.handleSubmit(event)} />
                    <input type="button" className="btnSignupStyle" name="sigup" value="회원가입" onClick={() => this.props.history.push("/signup")} />
                </div>
            </form>
            <p style={{ fontSize: '0.8rem' }}>배우多는 로그인 후 이용할 수 있습니다.</p>
        </div>;
    }
}

const mapStateToProps = (state) => {
    const { isAccount } = state.user;
    return {
        isAccount: isAccount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userid, password) => {
            dispatch(userActions.Login(userid, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);