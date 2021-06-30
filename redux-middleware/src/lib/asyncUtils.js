// Promise 베이스 Thunk
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = ['${type}_SUCCESS', '${type}_ERROR']

    // promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성
    // 여러 종류의 파라미터 전달 시 객체 타입으로 받아오면 됨
    // ex) writeComment({postId: 1, text: '댓글 데이터'})
    return param => async dispatch => {
        dispatch({type, param})
        try {
            // 결과물의 이름을 payload로 통일함
            const payload = await promiseCreator(param)
            dispatch({type: SUCCESS, payload})
        } catch(e) {
            dispatch({type: ERROR, payload: e, error: true})
        }
    }
}

// 리듀서에서 사용할 수 있는 유틸 함수 작성
export const reducerUtils = {
    // 초기상태.
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    // 로딩중 상태
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    // 성공 상태
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    // 실패 상태
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
}