import React from 'react'
import styled, { css } from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md'
import { useTodoDispatch } from './TodoContext'

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`

const CheckCircle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    border: 1px solid #ced4da;
    font-size: 22px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
    ${props => 
        props.done && css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`

const Text = styled.div`
    flex: 1;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #495057;
    ${props => 
        props.done && css`
            color: #ced4da;
        `
    }
`

function TodoItem({id, title, done}) {
    const dispatch = useTodoDispatch()
    const handleToggle = () => dispatch({type: 'TOGGLE', id})
    const handleRemove = () => dispatch({type: 'REMOVE', id})

    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={handleToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{title}</Text>
            <Remove onClick={handleRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem