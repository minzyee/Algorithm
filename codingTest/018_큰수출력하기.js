// 문제
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

// 나의 풀이
let arr = [7, 3, 9, 5, 6, 12];
function solution(n) {
	let answer = [];
	answer.push(arr[0]); // 0번보다 작은 인덱스는 없기 때문에 미리 arr[0]을 미리 추가 해준다.
	// arr[0] > arr[0-1]; false
	// 7 > undefined; false
	for (let i = 1; i < arr.length; i++) {
		// 현재 arr[i]가 이전 arr의 원소보다 크면 answer에 현재 arr[i]를 추가한다.
		if (arr[i] > arr[i - 1]) {
			answer.push(arr[i]);
		}
	}
	return answer;
}

console.log(solution(arr));
