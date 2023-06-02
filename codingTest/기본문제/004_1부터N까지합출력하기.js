// 문제
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// 나의 풀이
// 1. n의 합을 누적해줄 변수 sum을 선언하고 0으로 초기화 한다.
// 2. 반복문을 통해서 변수 sum에 n의 숫자만큼 반복되는 i를 누적하여 더해준다.
function solution(n) {
	let sum = 0;
	for (let i = 0; i < n + 1; i++) {
		sum += i;
	}
	return sum;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55

// 해답
// function solution(n) {
// 	let answer = 0;
// 	for (let i = 1; i <= n; i++) {
// 		answer = answer + i;
// 	}
// 	return answer;
// }
