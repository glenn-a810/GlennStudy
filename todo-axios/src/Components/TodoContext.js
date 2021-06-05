import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

function todoReducer(state, action) {
    switch(action.type) {
        case 'INIT':
            return InitTodo()
        case 'CREATE':
            return axios.post('https://express-sample-anmcv.run.goorm.io/todos', {
                title: state.title,
                done: state.done
            })
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            )
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error(`todoReducer에 정의 되어있지 않은 타입: ${action.type}`)
    }
}

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, [])

    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    return useContext(TodoStateContext)
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext)
}

export function InitTodo() {
    const [initData, setInitData] = useState([])
    useEffect(() => {
        axios
            .get('https://express-sample-anmcv.run.goorm.io/todos')
            .then(({ data }) => {
                setInitData(data)
            })
    }, [])
    return initData
}