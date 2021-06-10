// 로그인 페이지에서 발급 받은 토큰을 session storage에 저장
// 매 요청 시 sessionStorage에 있는 토큰을 헤더에 추가
// id: test@test.com | password: 1234

import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { TodoProvider } from './Components/TodoContext'
import TodoCreate from './Components/TodoCreate'
import TodoHead from './Components/TodoHead'
import TodoList from './Components/TodoList'
import TodoTemplate from './Components/TodoTemplate'
import Login from './Login'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  }
  body {
    background: #e9ecef;
  }
`

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('token') === null) {
      console.log('토큰 값 없엉')
    } else {
      console.log('토큰값 있으니까 isLogin을 true로 변경가능')
      setIsLogin(true)
    }
  }, [])

  if(isLogin) {
    return(
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    )
  } else {
    return(
      <Login />
    )
  }  
}

export default App