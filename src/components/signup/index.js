import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './signup.css'

function SignUp() {
    return <div className="SignUpStyle">
        <img src={logo} alt={"logo"} />
        <form>
            <input type="text" name="id" placeholder="아이디" />
            <input type="password" name="password" placeholder="비밀번호" />
            <input type="password" name="password_check" placeholder="비밀번호확인" />
            <input type="text" name="user_name" placeholder="이름" />
            <input type="text" name="id" placeholder="대학명" />
            <input type="text" name="student_id" placeholder="학번" />
            <input type="text" name="phone_number" placeholder="전화번호" />
            <input type="submit" name="submit" value="회원가입" />
        </form>
    </div>;
}

export default SignUp;