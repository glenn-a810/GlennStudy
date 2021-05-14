function solution(arr) {
    // var answer = 0;
    // let arrSum = arr.reduce((a,b) => a + b)

    // if(arr.length >= 1 && arr.length <= 100) {
    //     answer = arrSum / arr.length
    //     return answer
    // }

    // return answer;

    return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(solution([1,2,3,4]))
