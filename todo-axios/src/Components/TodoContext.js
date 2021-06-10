import axios from 'axios'
import React, { createContext, useContext, useReducer, useRef } from 'react'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

function todoReducer(state, action) {
    switch(action.type) {
        case 'INIT':
            return action.data
        case 'CREATE':
            return state.concat(action.todo)
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
    const nextId = useRef(5)

    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
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

export function useTodoNextId() {
    return useContext(TodoNextIdContext)
}

export async function getTodos(dispatch) {
    const response = await axios.get('/todos', {
        headers: {
            Authorization: sessionStorage.getItem('token')
        }
    })
    console.log(response)
    dispatch({type: 'INIT', data: response.data})
}

export async function postTodos(dispatch, id, title, done) {
    await axios.post('/todos', {
        title: title,
        done: false
    },
    {headers: {Authorization: sessionStorage.getItem('token')}})
    dispatch({
        type: 'CREATE',
        todo: {
            id: id,
            title: title,
            done: done
        }
    })
}

export async function putTodos(dispatch, id) {
    await axios.put('/todos', {todoId: id}, {headers: {Authorization: sessionStorage.getItem('token')}})
    dispatch({type: 'TOGGLE', id: id})
}

export async function deleteTodos(dispatch, id) {
    await axios.delete('/todos', {
        data: {todoId: id},
        headers: {Authorization: sessionStorage.getItem('token')}
    })
    dispatch({type: 'REMOVE', id: id})
}

export async function authTodos(accountData) {
    await axios
        .post('/login', accountData)
        .then(response => {
            if(response.data.isSuccess === 1) {
                console.log(response)
                sessionStorage.setItem('token', response.data.data)
            } else {
                sessionStorage.removeItem('token')
                alert(response.data.message)
            }
        })
}