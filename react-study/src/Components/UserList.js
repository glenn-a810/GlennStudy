import React from 'react'

function User({user}) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
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
    ]

    return(
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div> */}
            {/* <div>
                <User user = {users[0]}/>
                <User user = {users[1]}/>
                <User user = {users[2]}/>
            </div> */}
            <div>
                {users.map(user => (<User user={user} key={user.id}/>))}
            </div>
        </div>
    )
}

export default UserList