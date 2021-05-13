function solution( x, n ) {
    // var answer = []

    // for(i=0;i<n;i++) {
    //     answer.push(x)
    //     y = answer[0]
    //     x === answer[0] ? x += x : x = x += y
    // }

    // for(let i = 1; i <= n ; i++) {
    //     answer.push(x*i)
    // }

    return Array(n).fill(x).map((v, i) => (i + 1) * v)

    // return answer
}

console.log(solution(2,5))