// n ms동안 기다리는 promise
const sleep = n => new Promise(resolve => setTimeout(resolve, n))

// fake post 목록
const post = [
    {
        id: 1,
        title: '루이',
        body: 'A810 첫번째 고양이'
    },
    {
        id: 2,
        title: '오드',
        body: 'A810 두번째 고양이'
    },
    {
        id: 3,
        title: '미르',
        body: 'A810 세번째 고양이'
    }
]

// post 목록을 가져오는 비동기 함수
export const getPost = async () => {
    await sleep(500)
    return post
}

// id로 목록을 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(500)
    return post.find(post => post.id === id)
}