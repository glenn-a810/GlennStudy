// userEmail, userPassword

import React from 'react'

function Login() {
    return(
        <div>
            <h1>로그인</h1>
            <input type='emailId' placeholder='이메일' />
            &nbsp;
            <input type='password' placeholder='비밀번호' />
            &nbsp;
            <button>로그인</button>
        </div>
    )
}

export default Login