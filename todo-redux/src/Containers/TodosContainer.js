// 컨테이너 컴포넌트
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from '../Components/Todos'
import { addTodo, toggleTodo } from '../Modules/todos'

function TodosContainer() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleCreate = text => dispatch(addTodo(text))
    const handleToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch])

    return <Todos todos={todos} handleCreate={handleCreate} handleToggle={handleToggle} />
}

export default TodosContainer