// 문제
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.

// 버블정렬은 i가 첫 번째 순회할 때, 제일 큰 수가 맨 뒤로 간다.
// 반복할 때마다 큰 수가 계속해서 뒤로 밀려난다.
// i는 횟수를 의미하고, j와 j+1 두 개의 값을 비교하며 큰 수를 뒤로 밀어낸다.
function solution(arr) {
	let answer = arr;
	// i는 몇 번 돌아야하는지 횟수를 위한 반복문
	for (let i = 0; i < arr.length - 1; i++) {
		// arr[j]랑 arr[j+1]의 값을 비교하는 것이다.
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
