// 문제
// 정보왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡힘.
// 정보왕국에는 왕자가 N명 있는데, 서로 공주 구하겠다 함.
// 정보왕국의 왕읜 공주 구하러 갈 왕자를 다음 방법으로 결정하기로 함.
// 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매김 --> 나이 순으로 sort
// 1번 왕자부터 N번 왕자까지 시계 방향으로 동그랗게 앉힘. 그리고 번호를 외치게 함.
// 한 왕자가 K(특정 숫자)를 외치면, 그 왕자는 공주를 구하러 가는데서 제외되고, 원 밖으로 나오게 된다.
// 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
// 이렇게 해서 마지막 남은 왕자가 공주를 구하러 갈 수 있다.

// 큐(Queue)는 배열을 수평으로 눕혀둔 형태로, FIFO(First In First Out)으로 먼저 들어간 데이터가 먼저 나오는 구조이다.
// shift() 메서드는 배열의 가장 앞 요소를 제거한다.
// 하지만 제거를 하고나면 재정렬을 해야하고, 뒤의 원소들을 앞으로 당기게 되면서 시간이 소요된다.

// 값이 1개가 될 때까지 반복을 해야한다. --> while문을 쓸까?

// 1. queue에 값을 n개의 원소를 push 한다.
function solution(n, k) {
	let answer = 0;
	let queue = Array.from({ length: n }, (v, i) => i + 1);
	while (queue.length) {
		for (let i = 1; i < k; i++) {
			queue.push(queue.shift());
		}
		queue.shift();

		if (queue.length === 1) {
			answer = queue.shift();
		}
	}
	return answer;
}

console.log(solution(8, 3));
