import React, { useState } from 'react'
import NewsContents from './NewsContents'

function NewsResult({content}) {
    // const [resultContent, setResultContent] = useState(content)

    console.log('content in NewsResult.js : ', content)
    console.log('content type : ', typeof(content))
    // console.log('resultContent in NewsResult.js : ', resultContent)
    return(
        <div>
            {content.map((newscontent, index) => 
                <NewsContents 
                    key={index} 
                    title={newscontent.title} 
                    description={newscontent.description} 
                    author={newscontent.author} 
            />)}
        </div>
    )
}

export default NewsResult