// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
    var answer = ''
    var i = 0

    if(n < 10000) {
        while(i != n) {
            i % 2 ? answer += '박' : answer += '수'
            i++
        }
    }

    return answer;
}

// const waterMelon = n => {
//     return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }

console.log(solution(4))