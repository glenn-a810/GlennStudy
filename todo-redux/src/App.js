import React from 'react'
import CounterContainer from './Containers/CounterContainer'
import TodosContainer from './Containers/TodosContainer'

function App() {
  return(
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App