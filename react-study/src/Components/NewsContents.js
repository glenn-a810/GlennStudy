import React from 'react'

function NewsContents({index, title, description, author, newsDelete}) {
    return(
        <div>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <h5>{author}</h5>
            <button onClick={newsDelete}>삭제</button>
            <hr/>
        </div>
    )
}

export default NewsContents