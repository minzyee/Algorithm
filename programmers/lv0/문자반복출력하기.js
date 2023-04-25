// 문제
// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// let my_string = "hello";

// 풀이
// 1. 문자열을 배열의 전개구문연산자 형태로 만들고,
// 2. n번씩 반복할 수 있도록 repeat(n) 메서드를 사용했다.
// 3. 마지막은 하나의 문자열로 다시 합치기 위해 join("") 메서드를 사용했다.
function solution(my_string, n) {
	return [...my_string].map((value) => value.repeat(n)).join("");
}

console.log(solution("hello", 3)); // hhheeellllllooo

// 축약형
// const solution = (my_string, n) => [...my_string].map((v) => v.repeat(n)).join("");
