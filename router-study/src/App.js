import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Cats from './Components/Cats'
import HistorySample from './Components/HistorySample'
import Home from './Components/Home'


const App = () => {
  return(
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/cats'>냥 목록</Link>
        </li>
        <li>
          <Link to='/history'>History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cats' component={Cats} />
        <Route path='/history' component={HistorySample} />
        <Route
          // path를 따로 정하지 않으면 모든 상황에서 렌더링
          render = {({location}) => (
            <div>
              <h2>공허의 고양이 소환!!</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App