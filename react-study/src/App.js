// 사용자에게 핸드폰 번호를 받는다고 가정하고 01012341234나 0101231234로 입력된 전화번호를
// 보기좋게 010-1234-1234나 010-123-1234로 바꿔주도록
// 전화번호 자릿수 체크해서 state로 페이지 변경 없이 write/read mode 바꾸게끔 만들기

import React from 'react'
import './App.css'

function App() {
  return(
    <div align='center'>
      <h1>핸드폰번호 입력변경</h1>
      <h3>핸드폰번호를 입력하면 XXX-XXXX-XXXX와 같은 형식으로 변경 저장</h3>
      <h4>XXXXXXXXXXX와 같이 입력하면 변경하고 XXX-XXXX-XXXX와 같이 입력하면 그대로 저장</h4>
      <h4>핸드폰번호 Length가 맞지 않으면 Alert 띄워서 알려주기</h4>
      <form>
        <label>번호입력</label>
        <input type='text' id='number'/>
        <input type='submit' value='입력'/>
      </form>
    </div>
  )
}

export default App