import React, { useEffect } from 'react'

function User({user, handleDelete, handleToggle}) {
    useEffect(() => {
        console.log('user 값이 설정됨')
        console.log(user)
        return() => {
            console.log('user가 바뀌기 전....')
            console.log(user)
        }
    },[user])
    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }} onClick={() => handleToggle(user)}>{user.username}</b>
            <span>({user.email})</span>
            <button onClick={() => handleDelete(user)}>삭제</button>
        </div>
    )
}

function UserList({users, handleDelete, handleToggle}) {
    return(
        <div>
            {users.map(user => (<User user={user} key={user.id} handleDelete={handleDelete} handleToggle={handleToggle} />))}
        </div>
    )
}

export default UserList