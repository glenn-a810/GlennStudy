// input에서 휴대폰번호 값을 받아온다
// inputSample.js의 convertNumber에서 원하는 형태로 변형한다
// 변형된 값을 App.js에서 화면에 뿌려준다


import React, { useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        phoneNumber: ''
    })

    const {name, phoneNumber} = inputs; // 비구조화 할당을 통해 값 추출

    const onConvert = (e) => {
        const {value, name} = e.target
        console.log(value)
        setInputs({
            ...inputs,
            [name]: value
        })
        console.log(e.target)
    }

    const onChange = (e) => {
        const {value, name} = e.target // e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value로 설정
        })
        console.log(e.target)
    }

    const onReset = () => {
        setInputs({
            name: '',
            phoneNumber: ''
        })
    }

    return(
        <div>
            <input name='name' placeholder="이름" onChange={onChange} value={name} />
            <input name='phoneNumber' placeholder="전화번호" onChange={onConvert} value={phoneNumber} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({phoneNumber})
            </div>
        </div>
    )
}

export default InputSample