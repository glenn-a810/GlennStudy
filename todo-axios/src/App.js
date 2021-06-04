import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoCreate from './Components/TodoCreate'
import TodoHead from './Components/TodoHead'
import TodoList from './Components/TodoList'
import TodoTemplate from './Components/TodoTemplate'

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
  return(
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  )
}

export default App