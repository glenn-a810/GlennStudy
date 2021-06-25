const myLogger = store => next => action => {
    console.log(action) // action 로그
    const result = next(action) // 다음 미들웨어(or 리듀서)에게 action 전달

    // 업데이트 이후의 상태를 조회
    console.log('\t', store.getState()) // '\t'는 tap 하는거

    return result // dispatch(action)의 결과물 리턴
}

export default myLogger