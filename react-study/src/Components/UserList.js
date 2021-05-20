import React from 'react'

function User({user}) {
    console.log(user)
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({users}) {
    console.log(users)
    return(
        <div>
            {users.map(user => (<User user={user} key={user.id}/>))}
        </div>
    )
}

export default UserList