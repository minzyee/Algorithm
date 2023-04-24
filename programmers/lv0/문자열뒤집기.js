// 문제
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 풀이
// 1. 배열 메서드 reverse를 사용하기 위해 my_string을 배열로 만든다.
// 2. 각 문자열을 하나의 요소로 나누기 위해 전개구문 연산자 사용
// 3. join("")에서 따옴표를 사용해 다시 하나의 문자열로 합친다.
function solution(my_string) {
	return [...my_string].reverse().join("");
}
