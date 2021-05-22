// json 파일데이터를 불러와서 검색 버튼을 눌렀을 때 화면이 그려지게끔
// title component, input/button component, result component, contents component
// contents는 array형태인데 map으로
// json 데이터를 가져오는 방법 import newsData from './newsData'
// 삭제 버튼을 만들고 맨 마지막 기사를 삭제(뒤에꺼부터 지워지게)

import React, { useState } from 'react'
import NewsInput from './Components/NewsInput'
import NewsResult from './Components/NewsResult'
import NewsTitle from './Components/NewsTitle'
import newsData from './newsData.json'

function App() {
  const [content, setContent] = useState(newsData.articles)

  const newsSearch = () => {
    setContent(newsData.articles)
    console.log('App.js setContent : ', content)
  }
  
  const newsDelete = () => {
    setContent(content.filter(del => del.author === ''))
  }

  return(
    <>
      <NewsTitle title={'뉴스검색'} />
      <NewsInput newsSearch={newsSearch} content={content} newsDelete={newsDelete} />
      <NewsResult content={content}/>
    </>
  )
}

export default App