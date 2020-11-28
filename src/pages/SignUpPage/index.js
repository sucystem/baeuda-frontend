import logo from "../../assets/images/logo.jpg";
import './signup.scss'
import React, { Component } from 'react'
import { userActions } from "../../_actions"
import { connect } from "react-redux"

var crypto = require('crypto');

var password_check;
class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            user: {
                userid: "",
                password: "",
                user_name: "",
                univid: "",
                student_id: "",
                phone_number: "",
            }
        };
    };

    checkPassword = () => {
        return this.state.user.password === password_check;
    };

    handleChange = event =>{
        const { name, value } = event.target;
        if(name === "password_check"){
            password_check = value;
        }
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        try{
            if(
                user.userid &&
                user.password &&
                user.user_name &&
                user.univid &&
                user.student_id &&
                user.phone_number &&
                this.checkPassword() 
            ) {
                user.password = crypto.createHash('sha256').update(user.password).digest('base64');
                password_check = this.state.user.password;
                this.props.SignUp(user);
            }
        } catch(e){
            console.log(e)
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="SignUpStyle">
                <img src={logo} alt={"logo"} />
                <form action="post" onSubmit={this.handleSubmit}>
                    <input type="text" name="userid" placeholder="아이디" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.userid && (
                        <div className="help-block">아이디를 입력해주세요</div>
                    )}
                    <input type="password" name="password" placeholder="비밀번호" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.password && (
                        <div className="help-block">비밀번호를 입력해주세요</div>
                    )}
                    <input type="password" name="password_check" placeholder="비밀번호확인" onChange={event => this.handleChange(event)}/>
                    {submitted && !this.checkPassword(user.password, password_check) && (
                        <div className="help-block">비밀번호가 일치하지 않습니다</div>
                    )}
                    <input type="text" name="user_name" placeholder="이름" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.user_name && (
                        <div className="help-block">이름을 입력해주세요</div>
                    )}
                    <input type="text" name="univid" placeholder="대학명" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.univid && (
                        <div className="help-block">대학명을 입력해주세요</div>
                    )}
                    <input type="text" name="student_id" placeholder="학번" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.univid && (
                        <div className="help-block">학번을 입력해주세요</div>
                    )}
                    <input type="text" name="phone_number" placeholder="전화번호" onChange={event => this.handleChange(event)}/>
                    {submitted && !user.phone_number && (
                        <div className="help-block">전화번호를 입력해주세요</div>
                    )}
                    <input type="submit" name="submit" value="회원가입" onClick={event => this.handleSubmit(event)}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const{user} = state.user
    return {
        userData: user
    };
};

const mapDispatchToProps = dispatch=>{
    return {
        SignUp: user=>{
            dispatch(userActions.SignUp(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
