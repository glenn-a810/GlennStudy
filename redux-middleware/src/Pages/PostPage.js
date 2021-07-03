import React from 'react'
import PostContainer from '../Containers/PostContainer'

function PostPage({match}) {
    const {id} = match.params // URL 파라미터 조회

    // URL 파라미터 값은 문자열이기 때문에 parseInt를 사용하여 숫자로 변환
    return <PostContainer postId={parseInt(id, 10)} />
}

export default PostPage