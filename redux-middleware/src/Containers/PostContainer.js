import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../Modules/posts'
import Post from '../Components/Post'

function PostContainer({postId}) {
    const {loading, data, error} = useSelector(state => state.posts.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(postId))
    }, [postId, dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러</div>
    if(!data) return null

    return <Post post={data} />
}

export default PostContainer