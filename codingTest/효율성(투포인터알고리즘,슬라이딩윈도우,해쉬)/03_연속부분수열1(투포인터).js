// 문제
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N = 8, M = 6 이고 수열이 다음과 같이 1 2 1 3 1 1 1 2 주어진다면
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

let a = [1, 2, 1, 3, 1, 1, 1, 2];
function solution(m, arr) {
	let answer = 0; // 특정숫자가 될 때 카운팅할 변수
	let lp = 0; // 포인터를 0으로 초기화
	let sum = 0; // lp ~ rp 포인터들의 값을 더해서 특정숫자에 도달했는지 확인할 변수

	// lp는 더하게 될 숫자의 시작점이 되고, rp가 반복문을 통해서 1씩 증가되어 sum에 값을 더합니다.
	for (let rp = 0; rp < arr.length; rp++) {
		sum += arr[rp]; // sum에 rp을 더합니다.
		if (sum === m) answer++; // sum이 특정숫자 m과 동일하다면 answer를 카운팅합니다.

		// 만약 sum이 m보다 크거나 같다면
		while (sum >= m) {
			sum -= arr[lp++]; // lp의 포인터 위치를 증가시키기고, 그때 lp가 가리키는 값을 sum에서 빼줍니다.
			if (sum === m) answer++; // 다시 sum이 특정숫자와 동일한지 확인 후 맞다면 answer를 카운팅합니다.
		}
	}

	return answer;
}

console.log(solution(6, a));
