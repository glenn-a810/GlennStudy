// userEmail, userPassword

import React, { useState } from 'react'
import { authTodos } from './Components/TodoContext'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    // input에서 입력된 값을 state에 저장
    const [account, setAccount] = useState({
        userEmail: '',
        userPassword: ''
    })

    // onClick 이벤트로 e.target.value값 저장 (e.target.id의 값을 받아온 value로 대입)
    const handleAccount = e => {
        console.log(account)
        setAccount({
            ...account,
            [e.target.id]: e.target.value
        })
    }

    // 로그인 버튼의 onClick 이벤트로 받아온 값을 보내기
    const handleLogin = async e => {
        e.preventDefault()
        console.log('handleLogin state : ', account)
        await authTodos(account)
        // setAccount(account)
        // history.push('/todos')
        if(sessionStorage.getItem('token') === null) {
            history.push('/')
        } else {
            history.push('/todos')
        }
    }

    return(
        <div>
            <h1>로그인</h1>
            <input 
                type='email' 
                id='userEmail'
                placeholder='이메일' 
                onChange={handleAccount} 
            />
            &nbsp;
            <input 
                type='password' 
                id='userPassword'
                placeholder='비밀번호' 
                onChange={handleAccount} 
            />
            &nbsp;
            <button onClick={handleLogin} type='submit'>로그인</button>
        </div>
    )
}

export default Login