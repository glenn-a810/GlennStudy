import React from 'react'

function CreateUser({username, email, handleChange, handleCreate}){
    return(
        <div>
            <input name='username' placeholder='계정명' onChange={handleChange} value={username} />
            <input name='email' placeholder='이메일' onChange={handleChange} value={email} />
            <button onClick={handleCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser)