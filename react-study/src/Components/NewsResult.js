import React from 'react'
import NewsContents from './NewsContents'

function NewsResult({content, newsDelete}) {
    console.log('content in NewsResult.js : ', content)
    console.log('content type : ', typeof(content))

    return(
        <div>
            {content.map((newscontent, index) => 
                <NewsContents 
                    key={index} 
                    title={newscontent.title} 
                    description={newscontent.description} 
                    author={newscontent.author} 
                    newsDelete={newsDelete}
            />)}
        </div>
    )
}

export default NewsResult