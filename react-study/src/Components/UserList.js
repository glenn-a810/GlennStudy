import React from 'react'

function User({user, handleDelete}) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => handleDelete(user)}>삭제</button>
        </div>
    )
}

function UserList({users, handleDelete}) {
    return(
        <div>
            {users.map(user => (<User user={user} key={user.id} handleDelete={handleDelete}/>))}
        </div>
    )
}

export default UserList