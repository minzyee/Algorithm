// 문제
// 1부터 100사이의 자연수가 적힌 N장의 카드가 있다.
// 같은 숫자의 카드가 여러장 있을 수 있다.
// 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려한다.
// 3장을 뽑을 수 있는 모든 경우의 수를 기록한다.
// 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성해라.
// 만약 큰 수부터 만들어진 수가 25 25 24 24 22 20 19...이고 K값이 3이라면 K번째 큰 값은 22이다.

// set: 중복을 제거하는 자료구조
// 무조건 3장을 뽑아야하기 때문에 3중 for문을 돌아야한다.
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
function solution(n, k, card) {
	let answer;
	let setTmp = new Set();
	for (let i = 0; i < n; i++) {
		// console.log("I: ", i);
		for (let j = i + 1; j < n; j++) {
			// console.log("J: ", j);
			for (let k = j + 1; k < n; k++) {
				// console.log("K: ", k);
				// add: set 자료구조에 자료를 추가하는 메서드이다.
				setTmp.add(card[i] + card[j] + card[k]);
			}
		}
	}
	let a = Array.from(setTmp).sort((a, b) => b - a);
	answer = a[k - 1]; // 인덱스는 0부터 시작하기 때문에 -1 해준다.
	return answer;
}

console.log(solution(10, 3, arr));
