// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';

    if( s.length > 0 && s.length <= 100 ) {
        s.length % 2 == 0 ? answer = s.substring(s.length/2,(s.length/2)+2) : answer = s.substring(s.length/2,(s.length/2)+1)
    }

    return answer;

    // return s.substring(Math.ceil(s.length/2)-1,Math.floor(s.length/2)+1)
}

console.log(solution('abcdefg'))