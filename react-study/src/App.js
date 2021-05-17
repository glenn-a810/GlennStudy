import React, { useState } from 'react'
import InputSample from './Components/InputSample'
import Counter from './Components/Counter'
import Login from './Components/Login'


function App() {
  const [id, setId] = useState('userId')
  const [password, setPassword] = useState('password')
  
  return(
    <>
      <Login id={id} password={password} setId={setId} setPassword={setPassword}></Login>
    </>
  )
}

export default App