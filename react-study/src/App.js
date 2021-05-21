// json 파일데이터를 불러와서 검색 버튼을 눌렀을 때 화면이 그려지게끔
// title component, input/button component, result component, contents component
// contents는 array형태인데 map으로
// json 데이터를 가져오는 방법 import newsData from './newsData'

import React, { useState } from 'react'
import NewsInput from './Components/NewsInput'
import NewsResult from './Components/NewsResult'
import NewsTitle from './Components/NewsTitle'
import newsData from './newsData.json'

function App() {
  const [content, setContent] = useState(newsData.articles)

  const newsSearch = () => {
    setContent({...newsData.articles})
  }
  

  return(
    <>
      <NewsTitle />
      <NewsInput newsSearch={newsSearch} content={content} />
      <NewsResult content={content}/>
    </>
  )
}

export default App