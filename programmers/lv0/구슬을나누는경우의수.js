// 문제
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 나의 풀이
// balls! / (balls - share)! * share!

// balls! = 120
// (balls - share)! = 2
// share! = 6
// 120 / 12 = 10

function solution(balls, share) {
	let result = factorial(balls) / (factorial(balls - share) * factorial(share));
	return Math.round(result);
}

// 팩토리얼을 재귀 함수로 만들고 쓰면 좋다.
function factorial(num) {
	if (num > 0) {
		return num * factorial(num - 1);
	} else if (num === 0) {
		return 1;
	}
}
