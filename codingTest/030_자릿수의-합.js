// 문제
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// 나의 풀이
let n = 7;
let arr = [128, 460, 603, 40, 521, 137, 123];
function solution(n, arr) {
	let answer;
	let max = Number.MIN_SAFE_INTEGER;
	for (let x of arr) {
		// sum에 각 원소의 자릿수를 누적하여 더한 값을 할당한다.
		let sum = x
			.toString()
			.split("")
			.reduce((a, b) => a + Number(b), 0);

		// 만약 sum이 max보다 크면, max에 sum을 담아주고, 해당 원소인 x를 answer에 담는다.
		if (sum > max) {
			max = sum;
			answer = x;
		} else if (sum === max) {
			// 만약 sum과 max의 값이 같다면, 해당 원소 중 더 큰 값을 answer에 할당한다.
			if (x > answer) answer = x;
		}
	}
	return answer;
}

console.log(solution(n, arr));

// 해답
function solution1(n, arr) {
	let answer;
	let max = Number.MIN_SAFE_INTEGER; // 가장 작은 숫자로 초기화 해야 첫번째로 큰 숫자가 들어간다.
	for (let x of arr) {
		let sum = 0;
		let tmp = x;

		// 나머지(sum)가 0이 될 때까지 몫(tmp)을 계속 나눠주기
		while (tmp) {
			sum += tmp % 10; // 나머지(일의자리)를 누적하여 더해준다.
			tmp = Math.floor(tmp / 10); // 몫
		}

		// 처음엔 max에 128이 담겨있다. 만약에 sum이 max보다 더 크면 max에 sum을 담는다.
		if (sum > max) {
			max = sum;
			answer = x;
		} else if (sum === max) {
			if (x > answer) answer = x; // x가 기존에 담긴 answer보다 크면, answer에 x를 담아준다.
		}
	}

	return answer;
}

console.log(solution1(n, arr));
