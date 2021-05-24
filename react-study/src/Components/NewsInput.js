import React from 'react'

function NewsInput({newsSearch, newsDelete}) {
    return(
        <div align='center'>
            <input/>&nbsp;
            <button onClick={newsSearch}>검색</button>&nbsp;
            <button onClick={newsDelete}>삭제</button>
            <hr/>
        </div>
    )
}

export default NewsInput