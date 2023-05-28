// 문제
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.(소수 <-> 합성수)
// 자연수 n이 매개변수로 주어질 때, n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(n) {
	let answer = 0;

	for (let i = 1; i <= n; i++) {
		let count = 0;
		// console.log("i: ", i);
		for (let j = 1; j <= n; j++) {
			// console.log("j: ", j);
			if (i % j === 0) count++; // 만약 1과 1을 나눠서 0이 되면 count++하기
			// console.log("count: ", count);
			if (count > 2) {
				answer++; // count가 2보다 크면(즉, 3개 이상이면) answer++한다.
				break; // 3개 이상인 것을 확인했으니 끊고, 해당 for(j)문 탈출한다. --> for(i)문으로 간다.
			}
		}
	}

	return answer;
}

console.log(solution(10)); // 5
console.log(solution(15)); // 8
