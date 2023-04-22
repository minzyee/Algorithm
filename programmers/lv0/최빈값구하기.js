// 문제
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.
// 예) [1, 2, 3, 3, 3, 4] 일 때, result: 3
// 예) [1, 1, 2, 2] 일 때, result: -1

// 풀이
let array = [1, 2, 3, 3, 3, 4];

// 접근 방법
// 배열의 각 원소를 누적하여 저장을 하고, 중복되면 갯수를 추가해준다.
// 그러려면 객체에 저장을 하는게 제일 깔끔할 것 같다.

function solution(array) {
	const modeCount = array.reduce((acc, cur) => {
		acc[cur] = (acc[cur] || 0) + 1;
		return acc; // { 1:1, 2:1, 3:3, 4:1 }
	}, {});

	// filter 메서드로 최빈값 찾기
	const modes = Object.keys(modeCount).filter((key) => {
		return modeCount[key] === Math.max(...Object.values(modeCount));
	});

	// 최빈값이 1개보다 많은 경우 -1
	return modes.length > 1 ? -1 : Number(modes[0]);
}
