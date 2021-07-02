import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostList from '../Components/PostList'
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
    return <PostList posts={data} />
}

export default PostListContainer