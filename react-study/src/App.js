import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import CreateUser from './Components/CreateUser'
import UserList from './Components/UserList'
import useInput from './Hooks/useInput'

function countActiveUsers(users) {
  console.log("활성화 된 users 수를 세는중...")
  return users.filter(user => user.active).length
}

const InitialState = {
  users: [
    {
      id: 1,
      username: 'Luwie',
      email: 'luwie@a810.com',
      active: true
    },
    {
      id: 2,
      username: 'Odd',
      email: 'odd@a810.com',
      active: false
    },
    {
      id: 3,
      username: 'Mir',
      email: 'mir@a810.com',
      active: false
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     input: {
    //       ...state.input,
    //       [action.name]: action.value
    //     }
    //   }
    case 'CREATE_USER':
      return {
        input: InitialState.input,
        users: state.users.concat(action.user)
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
      }
    default:
      return state
  }
}

export const UserDispatch = React.createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, InitialState)
  const nextId = useRef(4)
  const {users} = state
  // const {username, email} = state.input

  const [{username, email}, handleChange, reset] = useInput({
    username: '',
    email: ''
  })

  // const handleChange = useCallback(e => {
  //   const {name, value} = e.target
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, [])

  const handleCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    reset()
    nextId.current += 1
  }, [username, email, reset])

  // const handleDelete = useCallback(id => {
  //   dispatch({
  //     type: 'DELETE_USER',
  //     id
  //   })
  // }, [])

  // const handleToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   })
  // }, [])

  const count = useMemo(() => countActiveUsers(users), [users])

  return(
    <UserDispatch.Provider value={dispatch}>
      <CreateUser username={username} email={email} handleChange={handleChange} handleCreate={handleCreate} />
      <UserList users={users} />
      <div>Active user : {count}</div>
    </UserDispatch.Provider>
  )
}

export default App