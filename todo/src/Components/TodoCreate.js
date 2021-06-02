// 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. 
// TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해주고, 
// 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다. 
// 버튼을 다시 누르면 폼이 사라집니다.
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'
import { useTodoDispatch, useTodoNextId } from './TodoContext'

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s, all ease-in;
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 16px;
    box-sizing: border-box;
`

function TodoCreate() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const dispatch = useTodoDispatch()
    const nextId = useTodoNextId()

    const handleToggle = () => setOpen(!false)
    const handleChange = e => setValue(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })
        setValue('')
        setOpen(false)
        nextId.current += 1
    }

    return(
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={handleSubmit}>
                        <Input 
                            autoFocus 
                            placeholder='할 일을 입력 후 ENTER를 누르세요' 
                            onChange={handleChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={handleToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default TodoCreate