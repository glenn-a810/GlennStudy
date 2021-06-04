import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem title='a' done={true} />
            <TodoItem title='b' done={true} />
            <TodoItem title='c' done={false} />
            <TodoItem title='d' done={false} />
        </TodoListBlock>
    )
}

export default TodoList