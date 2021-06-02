// 이 컴포넌트는 우리가 만들 투두리스트의 레이아웃을 설정하는 컴포넌트입니다. 
// 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줍니다.
import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 718px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`

function TodoTemplate({children}) {
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    )
}

export default TodoTemplate