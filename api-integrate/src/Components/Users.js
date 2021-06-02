import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchUser = async() => {
    //         try {
    //             // 요청이 시작할 때 error와 user를 초기화
    //             setError(null)
    //             setUser(null)
    //             // loding상태를 true로 변경
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
    //     fetchUser()
    // }, [])

    const fetchUser = async () => {
        try {
            setError(null)
            setUser(null)
            setLoding(true)

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            setUser(response.data)
        } catch(e) {
            setError(e)
        }
        setLoding(false)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!user) return null

    return(
        <>
            <ul>
                {user.map(users => (
                    <li key={users.id}>
                        {users.username} ({users.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUser}>다시 불러오기</button>
        </>
    )
}

export default Users