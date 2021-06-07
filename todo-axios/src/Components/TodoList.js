import React, { useEffect } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useTodoDispatch, useTodoState, getTodos } from './TodoContext'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    const todoData = useTodoState()
    const dispatch = useTodoDispatch()

    useEffect(() => {
        getTodos(dispatch)
    }, [dispatch])

    return(
        <TodoListBlock>
            {todoData.map((todo, index) => (
                <TodoItem
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList