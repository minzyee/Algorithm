// 문제
// 대문자로 이루어진 영어단어가 입력되면
// 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// 나의 풀이
// 방법 1. 정규표현식을 사용한다.
// 방법 2. 문자열을 순회하면서 A와 매칭되면 #으로 바꾼다.
let string = "BANANA";
function solution(string) {
	// ("문자열").replace(/정규표현식/, "대체문자열")
	// "정규표현식"에 매칭되는 항목을 "대체문자열"로 변환한다.
	return string.replace(/A/g, "#");
}

console.log(solution(string));
