// 문제
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

// 접근방법
// 방법1) 차집합 new Set을 사용하기 X
// 이 풀이는 [1, 3, 0]로 나와서 [1, 3, 0, 1] 조건을 만족하지 못한다.
// function solution(arr) {
// 	let deduplication = [...new Set(arr)];
// 	return deduplication;
// }

// 방법2) 반복문으로 현재값과 이전값을 비교한다.
// 값이 다르면 배열에 추가한다.
let arr = [1, 1, 3, 3, 0, 1, 1];
function solution(arr) {
	const result = [];
	arr.forEach(value, (index) => {
		// 현재 값과 이전값이 다르면
		if (arr[index] !== arr[index - 1]) {
			result.push(arr[index]); // 배열 result에 추가하기
		}
		return result;
	});
}

// 방법3) filter 메서드를 사용하여 현재 요소를 기준으로 이전 요소와 비교하여 조건에 맞는 것만 필터링한다.
function solution2(arr) {
	return arr.filter((value, index) => value !== arr[index - 1]);
}
