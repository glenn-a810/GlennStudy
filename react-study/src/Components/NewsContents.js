import React from 'react'

function NewsContents({title, description, author}) {
    return(
        <div>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <h5>{author}</h5>
            <hr/>
        </div>
    )
}

export default NewsContents