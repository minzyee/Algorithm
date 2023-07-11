// 문제
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

function solution(arr) {
	let answer = arr;

	for (let i = 0; i < arr.length - 1; i++) {
		let index = i; // 최솟값의 위치를 index에 저장한다.

		for (let j = i + 1; j < arr.length; j++) {
			// index보다 더 작은 j 원소를 만나게 된다면, 그 j를 index에 할당한다.
			if (arr[j] < arr[index]) {
				index = j;
			}
		}
		[arr[i], arr[index]] = [arr[index], arr[i]];
	}
	return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
