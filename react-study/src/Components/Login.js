import React, { useState } from 'react'

function Login({id, password, setId, setPassword}) {
//id password get from input tag
//change parents state change
    console.log(id, password);
    const handleId = (e) => {
        console.log(e.target)
        const {id, value} = e.target
        setId(value)
    }

    const handlePassword = (e) => {
        console.log(e.target)
        const {id, value} = e.target
        setPassword(value)
    }

    const handleSubmit = () => {
        setId('')
        setPassword('')
    }

    return(
        <div>
            ID<input id='id' name='hello' onChange={handleId} value={id}></input> <br/>
            PASSWORD<input id='password' name="test" onChange={handlePassword} value={password}></input> <br/>
            <input type='submit' onClick={handleSubmit}/>
        </div>
    )
}

export default Login