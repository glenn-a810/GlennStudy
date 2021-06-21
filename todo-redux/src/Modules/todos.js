const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextID = 1 // todo 데이터에서 사용 할 고유 ID
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextID++, // 새 항목을 추가하고 nextID를 1씩 증가
        text
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

const initialState = [{
    id: 0,
    text: 'todo 모듈',
    done: false
}]

export default function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
        default:
            return state
    }
}