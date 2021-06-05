import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useTodoState } from './TodoContext'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    // const dispatch = useTodoDispatch()
    const todoData = useTodoState()
    console.log('todoData in TodoList.js : ', todoData)
    // const todoData = InitTodo()
    // const [todoData, setTodoData] = useState([])

    // useEffect(() => {
    //     axios
    //     .get('https://express-sample-anmcv.run.goorm.io/todos')
    //     .then(({data}) => {
    //         setTodoData(data)
    //     })
    // }, [])

    return(
        <TodoListBlock>
            {todoData.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList