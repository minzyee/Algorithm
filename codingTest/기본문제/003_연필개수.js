// 문제
// 연필 1 다스는 12자루입니다.
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때,
// N명의 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// 나의 풀이
// 연필 1다스 === 12자루
// 학생 1명당 연필 1자루씩 줄거임
// 학생수 / 12 --> 올림

function solution(n) {
	let dozen = 12;
	return Math.ceil(n / dozen);
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
