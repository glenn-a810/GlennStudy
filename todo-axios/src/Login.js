// userEmail, userPassword

import React, { useState } from 'react'
import { authTodos } from './Components/TodoContext'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 100px;
    padding: 20px;
`

const Input = styled.input`
    font-size: 14px;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin: 0 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #ffffff;
    box-sizing: border-box;
`

const Button = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 16px 0 7px;
    cursor: pointer;
    color: #ffffff;
    border: none;
    border-radius: 0;
`

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
        <Container>
            <Input 
                type='email' 
                id='userEmail'
                placeholder='이메일' 
                onChange={handleAccount} 
            />
            <Input 
                type='password' 
                id='userPassword'
                placeholder='비밀번호' 
                onChange={handleAccount} 
            />
            <Button onClick={handleLogin} type='submit'>로그인</Button>
        </Container>
    )
}

export default Login