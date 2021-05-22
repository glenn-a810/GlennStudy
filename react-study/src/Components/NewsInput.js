import React from 'react'

function NewsInput({newsSearch, content, newsDelete}) {
    console.log('newsSearch in NewsInput.js : ', newsSearch)
    console.log('content in NewsInput.js : ', content)
    return(
        <div align='center'>
            <input/>&nbsp;
            <button onClick={newsSearch}>검색</button>
            <button onClick={newsDelete}>삭제</button>
            <hr/>
        </div>
    )
}

export default NewsInput