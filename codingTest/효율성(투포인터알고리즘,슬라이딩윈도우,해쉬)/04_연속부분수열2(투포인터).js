// 문제
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N = 5, M = 5이고 수열이 다음과 같다면
// 1 3 1 2 3
// 합이 5이하가 되는 연속부분수열은 아래 총 10가지입니다.
// {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}

let a = [1, 3, 1, 2, 3];
function solution(m, arr) {
	let answer = 0; // 조건에 맞을 때 카운팅하기
	let lp = 0; // 시작 포인터
	let sum = 0; // lp~rp 포인터들을 누적하여 합한 값

	// 연속부분수열은 리스트를 일직선 방향으로 움직여야하기 때문에
	// 특정숫자에 도달할 때까지는 계속 lp ~ rp 포인터를 더하고,
	// 만약 특정숫자를 벗어나게 되면, 시작 포인터인 lp를 줄이면서 특정숫자인지 체크하고,
	// 특정숫자보다 작으면 다시 rp를 증가시키는 방식으로 진행해야한다.
	for (let rp = 0; rp < arr.length; rp++) {
		sum += arr[rp]; // sum에 rp가 가리키는 값을 누적하여 더한다.

		// sum이 특정숫자보다 큰 경우에는, 시작포인터 lp가 가리키는 값을 빼고, lp 포인터를 증가시킨다.
		while (sum > m) {
			sum -= arr[lp++]; // 3+1+2(X) -> 1+2(O)
		}

		// sum이 특정숫자보다 크지 않은 경우에, answer에 특정숫자의 조건에 맞는 갯수만큼 카운팅 해준다.
		answer += rp - lp + 1; // 1 + 2 + 3 + 2 + 2
	}
	return answer;
}

console.log(solution(5, a));
