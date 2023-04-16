// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 문제 풀이
let number = [1, 2, 3, 4, 5];

function solution(number) {
	number.sort((a, b) => b - a);
	return number[0] * number[1];
}

// 나의 풀이 방법
// 내림차순으로 배열을 정렬을 한다.
// 배열[0], 배열[1]을 곱한다.

// 문제를 풀며 배운 점
// sort 정렬은 원본 배열에 영향을 준다. 때문에 따로 변수에 담아두지 않고 사용해도 된다.
