import * as postAPI from '../API/posts'
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils'

// action 타입

// post 여러개 조회하기
const GET_POSTS = 'GET_POSTS'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

// post 하나 조회하기
const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERRORR'

// export const getPosts = () => async dispatch => {
//     dispatch({type: GET_POSTS})
//     try {
//         const posts = await postAPI.getPosts()
//         dispatch({type: GET_POSTS_SUCCESS, posts})
//     } catch (e) {
//         dispatch({type: GET_POSTS_ERROR, e})
//     }
// }

// getPosts리팩토링
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts)

// export const getPost = id => async dispatch => {
//     dispatch({type: GET_POST})
//     try {
//         const post = await postAPI.getPostById(id)
//         dispatch({type: GET_POST_SUCCESS, post})
//     } catch (e) {
//         dispatch({type: GET_POST_ERROR, e})
//     }
// }

// getPost 리팩토링
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById)

// const initialState = {
//     posts: {
//         loading: false,
//         data: null,
//         error: null
//     },
//     post: {
//         loading: false,
//         data: null,
//         error: null
//     }
// }

// initialState 리팩토링
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

// export default function post(state = initialState, action) {
//     switch(action.type) {
//         case GET_POSTS:
//             // return {
//             //     ...state,
//             //     // posts: {
//             //     //     loading: true,
//             //     //     data: null,
//             //     //     error: null
//             //     // }
//             //     posts: reducerUtils.loading()
//             // }
//         case GET_POSTS_SUCCESS:
//             // return {
//             //     ...state,
//             //     // posts: {
//             //     //     loading: false,
//             //     //     data: action.posts,
//             //     //     error: null
//             //     // }
//             //     posts: reducerUtils.success(action.payload)
//             // }
//         case GET_POSTS_ERROR:
//             // return {
//             //     ...state,
//             //     // posts: {
//             //     //     loading: false,
//             //     //     data: null,
//             //     //     error: action.error
//             //     // }
//             //     posts: reducerUtils.error(action.error)
//             // }
//             return handleAsyncActions(GET_POSTS, 'posts')(state, action)
//         case GET_POST:
//             // return {
//             //     ...state,
//             //     // post: {
//             //     //     loading: true,
//             //     //     data: null,
//             //     //     error: null
//             //     // }
//             //     post: reducerUtils.loading()
//             // }
//         case GET_POST_SUCCESS:
//             // return {
//             //     ...state,
//             //     // post: {
//             //     //     loading: false,
//             //     //     data: action.post,
//             //     //     error: null
//             //     // }
//             //     post: reducerUtils.success(action.payload)
//             // }
//         case GET_POST_ERROR:
//             // return {
//             //     ...state,
//             //     // post: {
//             //     //     loading: false,
//             //     //     data: null,
//             //     //     error: action.error
//             //     // }
//             //     post: reducerUtils.error(action.error)
//             // }
//             return handleAsyncActions(GET_POST, 'post')(state, action)
//         default:
//             return state
//     }
// }

export default function post(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts')(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActions(GET_POST, 'post')(state, action)
        default:
            return state
    }
}