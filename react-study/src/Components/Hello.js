import React from 'react'

function Hello({ color, name, isSpecial }) {
    return(
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            <h3>Hello, {name} </h3>
        </div>
    )
}

Hello.defaultProps = {
    name: 'Noname'
}

export default Hello