import React from 'react'
import axios from 'axios'
import useAsync from '../Hooks/useAsync'

async function getUsers() {
    const response = axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function Users() {
    const [state, refetch] = useAsync(getUsers, [])

    const {loading, data: users, error} = state

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null

    return(
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} ({user.name})</li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </>
    )
}

export default Users


// import React, { useEffect, useReducer } from 'react'
// import axios from 'axios'

// function reducer(state, action) {
//     switch(action.type) {
//         case 'LOADING':
//             return {
//                 loading: true,
//                 data: null,
//                 error: null
//             }
//         case 'SUCCESS':
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null
//             }
//         case 'ERROR':
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error
//             }
//         default:
//             throw new Error(`Unhandled action type: ${action.type}`)
//     }
// }

// function Users() {
//     const [state, dispatch] = useReducer(reducer, {
//         loading: false,
//         data: null,
//         error: null
//     })

//     const fetchUser = async () => {
//         dispatch({type: 'LOADING'})
//         try {
//             const response = await axios.get(
//                 'https://jsonplaceholder.typicode.com/users'
//             )
//             dispatch({type: 'SUCCESS', data: response.data})
//         } catch(e) {
//             dispatch({type: 'ERROR', error: e})
//         }
//     }

//     useEffect(() => {
//         fetchUser()
//     }, [])

//     const {loading, data: users, error } = state

//     if(loading) return <div>로딩중...</div>
//     if(error) return <div>에러가 발생했습니다.</div>
//     if(!users) return null

//     return(
//         <>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.username} ({user.name})
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={fetchUser}>다시 불러오기</button>
//         </>
//     )
// }

// export default Users

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Users() {
//     const [user, setUser] = useState(null)
//     const [loading, setLoding] = useState(false)
//     const [error, setError] = useState(null)

//     // useEffect(() => {
//     //     const fetchUser = async() => {
//     //         try {
//     //             // 요청이 시작할 때 error와 user를 초기화
//     //             setError(null)
//     //             setUser(null)
//     //             // loding상태를 true로 변경
//     //             setLoding(true)

//     //             const response = await axios.get(
//     //                 'https://jsonplaceholder.typicode.com/users'
//     //             )
//     //             setUser(response.data)
//     //         } catch(e) {
//     //             setError(e)
//     //         }
//     //         setLoding(false)
//     //     }
//     //     fetchUser()
//     // }, [])

//     const fetchUser = async () => {
//         try {
//             setError(null)
//             setUser(null)
//             setLoding(true)

//             const response = await axios.get(
//                 'https://jsonplaceholder.typicode.com/users'
//             )
//             setUser(response.data)
//         } catch(e) {
//             setError(e)
//         }
//         setLoding(false)
//     }

//     useEffect(() => {
//         fetchUser()
//     }, [])

//     if(loading) return <div>로딩중...</div>
//     if(error) return <div>에러가 발생했습니다.</div>
//     if(!user) return null

//     return(
//         <>
//             <ul>
//                 {user.map(users => (
//                     <li key={users.id}>
//                         {users.username} ({users.name})
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={fetchUser}>다시 불러오기</button>
//         </>
//     )
// }

// export default Users