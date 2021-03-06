import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Post'
import { getPosts } from '../Modules/posts'

function PostListContainer() {
    const {loading, data, error} = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러</div>
    if(!data) return null
    return <Post posts={data} />
}

export default PostListContainer