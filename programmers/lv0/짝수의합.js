// 문제
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 풀이
// 방법1 - for 반복문
function solution(n) {
	// return [...n].reduce((acc, curr) => acc + curr);
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

// 방법2 - 수열공식
function solution(n) {
	let half = Math.floor(n / 2);
	return half * (half + 1);
}

// 방법3 - 배열 메서드 사용
function solution(n) {
	return Array(10) // 빈배열 10개 생성
		.fill() // undefined로 초기화
		.map((_, i) => i + 1) // 배열의 인덱스를 1부터 채움
		.filter((v) => v % 2 === 0) // 2로 나눠 떨어지는 것만 남김
		.reduce((a, c) => a + c); // 나머지 원소의 누적합
}
