import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../Components/Counter'
import { increase, decrease, setDiff } from '../Modules/counter'

function CounterContainer() {
    // useSelector는 redux store의 상태를 조회하는 hook
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }))

    //useDispatch는 redux store의 dispatch를 함수에서 사용할 수 있게 해주는 hook
    const dispatch = useDispatch()
    // 각 액션들을 dispatch
    // 여기서 값을 대입하면 too much render에러 발생
    // render과정에서 state를 변화시키는 함수가 있다면 리렌더링이 계속 일어나서 무한루프처럼 동작
    const handleIncrease = () => dispatch(increase())
    const handleDecrease = () => dispatch(decrease())
    const handleSetDiff = diff => dispatch(setDiff(diff))

    return(
        <Counter
            // state
            number={number}
            diff={diff}
            // action을 dispatch하는 함수를 props로 넣어줌
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleSetDiff={handleSetDiff}
        />
    )
}

export default CounterContainer