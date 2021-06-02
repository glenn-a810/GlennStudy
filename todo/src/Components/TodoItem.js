// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 
// 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다. 
// 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다. 
// 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.
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

function TodoItem({id, done, text}) {
    const dispatch = useTodoDispatch();
    const handleToggle = () => dispatch({type: 'TOGGLE', id})
    const handleRemove = () => dispatch({type: 'REMOVE', id})

    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={handleToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={handleRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem