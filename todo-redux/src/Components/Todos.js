// todo 프리젠테이셔널 컴포넌트
// TodoItem, TodoList, Todos 컴포넌트 작성
import React, { useState } from 'react'

// 컴포넌트 최적화를 위해 React.memo를 사용
// React.memo()는 렌더링 된 결과를 메모라이징 한 뒤, 다음 렌더링이 일어날 때 props 변화가 없으면 재사용한다.
// const TodoItem = React.memo(({todo, handleToggle}) => {
//     <li style={{textDecoration: todo.done ? 'line-through' : 'none'}} onClick={() => handleToggle(todo.id)}>
//         {todo.text}
//     </li>
// })

// const TodoList = React.memo(({todos, handleToggle}) => {
//     <ul>
//         {todos.map(todo => (
//             <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
//         ))}
//     </ul>
// })
const TodoItem = React.memo(function TodoItem({todo, handleToggle}) {
    return(
        <li style={{textDecoration: todo.done ? 'line-through' : 'none'}} onClick={() => handleToggle(todo.id)}>
            {todo.text}
        </li>
    )
})

const TodoList = React.memo(function TodoList({todos, handleToggle}) {
    return(
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
            ))}
        </ul>
    )
})

function Todos({todos, handleCreate, handleToggle}) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리하는 것은 아님
    const [text, setText] = useState('')
    const handleChange = e => setText(e.target.value)
    const handleSubmit = e => {
        e.preventDefault() // 새로고침 방지
        handleCreate(text)
        setText('') // 입력값 초기화
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    placeholder='할 일을 입력하세요.'
                    onChange={handleChange}
                />
                <button type='submit'>등록</button>
            </form>
            <TodoList todos={todos} handleToggle={handleToggle} />
        </div>
    )
}

export default Todos