import React, { useEffect } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useTodoDispatch, useTodoState, getTodos } from './TodoContext'
import { useHistory } from 'react-router'

const Button = styled.button`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 5px 0 7px;
    cursor: pointer;
    color: #ffffff;
    border: none;
    border-radius: 0;
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
`

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function handleLogout() {
    sessionStorage.removeItem('token')
    window.location.reload()
}

function TodoList() {
    const todoData = useTodoState()
    const dispatch = useTodoDispatch()
    const history = useHistory()

    // /todos에서 token이 없을 때, login 화면으로 라우트
    useEffect(() => {
        if(sessionStorage.getItem('token') === null) {
            history.push('/')
        } else {
            getTodos(dispatch)
        }
    }, [history, dispatch])

    return(
        <TodoListBlock>
            <Button onClick={handleLogout}>로그아웃</Button>
            {todoData.length === 0 ? 
            <div>로딩중...</div> : 
            todoData.map((todo, index) => (
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