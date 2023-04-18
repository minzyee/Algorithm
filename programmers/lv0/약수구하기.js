// 문제
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 풀이
let n = 24;
function solution(n) {
	return Array(n) // 빈 배열을 n개 생성한다.
		.fill() // 빈 배열을 undefined로 채운다.
		.map((_, index) => index + 1) // undefined로 채워진 배열에 index 값을 1씩 추가하여 채운다.
		.filter((value) => n % value === 0); // map의 값을 value로 받아와서 정수 n과 나눠 0이 되는 값만 필터링해서 가져온다.
}
