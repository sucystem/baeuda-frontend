import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './login.css'
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    return <div className="loginStyle">
        <p className="titleStyle">대학생을위한학습네트워크</p>
        <img src={logo} alt={"logo"} />
        <form>
            <input type="text" size="20" name="id" placeholder="아이디"/>
            <input type="password"  size="20" name="pw" placeholder="비밀번호"/>
            <div className="btnBindStyle">
                <input type="button" className="btnLoginStyle" name="login" value="로그인" onClick={() => history.push("/main")}/>
                <input type="button" className="btnSignupStyle" name="sigup" value="회원가입" onClick={() => history.push("/signup")}/>
            </div>
        </form>
        <p style={{fontSize: '0.8rem'}}>배우多는 로그인 후 이용할 수 있습니다.</p>
    </div>;
}

export default Login;