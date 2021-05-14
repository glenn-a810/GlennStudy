import React from 'react'
import Hello from './Components/Hello'
import './App.css'
import Wrapper from './Components/Wrapper'

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본단위 px
    padding: '1em' // 다른단위 사용 시 문자열로 설정
  }

  return(
    <Wrapper>
      <Hello name='React' color='red' isSpecial={true} />
      <Hello color='pink'/>
    </Wrapper>
  )
}
export default App