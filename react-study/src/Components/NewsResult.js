import React from 'react'
import NewsContents from './NewsContents'

function NewsResult({content}) {
    console.log('NewsResult : ',content)
    return(
        <div>
            {content.map((newscontent, index) => <NewsContents key={index} title={newscontent.title} description={newscontent.description} author={newscontent.author} />)}
        </div>
    )
}

export default NewsResult