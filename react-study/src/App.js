import React, { useRef, useState } from 'react'
import CreateUser from './Components/CreateUser'
import UserList from './Components/UserList'

function App() {
  const [input, setInput] = useState({
    username: '',
    email: ''
  })

  const {username, email} = input
  const handleChange = e => {
    const {name, value} = e.target
    setInput({
      ...input,
      [name]: value
    })
    console.log(e)
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'Luwie',
        email: 'luwie@a810.com'
    },
    {
        id: 2,
        username: 'Odd',
        email: 'odd@a810.com'
    },
    {
        id: 3,
        username: 'Mir',
        email: 'mir@a810.com'
    }
  ])

  const nextId = useRef(4)
  const handleCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user])

    setInput({
      username: '',
      email: ''
    })
    nextId.current += 1
  }

  return(
    <>
      <CreateUser username={username} email={email} handleChange={handleChange} handleCreate={handleCreate} />
      <UserList users={users} />
    </>
  )
}

export default App