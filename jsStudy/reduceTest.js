let arr = ['a','b','c','c','d','a','d']

let result = arr.reduce((pre, cur) => {
    console.log(pre, cur)
    console.log('이전에 값이 있습니다 ', (pre[cur] || 0))
    pre[cur] = (pre[cur] || 0) + 1
    return pre
},{})

console.log(result)