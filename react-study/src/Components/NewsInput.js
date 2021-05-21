import React from 'react'

function NewsInput({newsSearch, content}) {
    return(
        <div align='center'>
            <input/>&nbsp;
            <button onClick={() => newsSearch(content)}>검색</button>
            <hr/>
        </div>
    )
}

export default NewsInput