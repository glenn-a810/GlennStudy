import { useCallback, useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET_INPUT':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = ''
                return acc
            }, {})
        default:
            return state
    }
}

function useInput(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm)

    const handleChange = useCallback(e => {
        const {name, value} = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])
    
    const reset = useCallback(() => dispatch({type: 'RESET_INPUT'}),[])
    return [form, handleChange, reset]
}

export default useInput

// import { useCallback, useState } from 'react'

// function useInput(initialForm) {
//     const [form, setForm] = useState(initialForm)

//     const handleChange = useCallback(e => {
//         const {name, value} = e.target
//         setForm(form => ({
//             ...form,
//             [name]: value
//         }))
//     }, [])

//     const reset = useCallback(() => setForm(initialForm), [initialForm])

//     return [form, handleChange, reset]
// }

// export default useInput