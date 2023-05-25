// 문제
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

// 입력설명
// 첫 번째 줄: 첫 번째 배열의 크기 n이 주어진다.
// 두 번째 줄: n개의 배열 원소가 오름차순으로 주어진다.
// 세 번째 줄: 두 번째 배열의 크기 m이 주어진다.
// 네 번째 줄: m개의 배열 원소가 오름차순으로 주어진다.

// 각 리스트의 원소는 int형 변수의 크기를 넘지 않는다.

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

function solution(arr1, arr2) {
	let answer = [];
	let n = arr1.length; // 3
	let m = arr2.length; // 5

	// 각 포인터(여기서는 각 인덱스)를 0으로 초기화
	let p1 = (p2 = 0);

	// 둘 중 하나만 거짓이 되어도 모두 거짓처리 해야한다.
	// arr1[p1]이 arr2[p2]보다 작거나 같으면, arr1[p1]을 answer 배열에 추가하고 p1을 1 증가시킨다.
	// 즉, p1이 현재 가리키고 있는 값을 answer에 push하고, 후위 증감연산자로 p1을 1 증가시킨다.(다음 인덱스로 넘어간다.)
	while (p1 < n && p2 < m) {
		if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
		else answer.push(arr2[p2++]);
	}

	while (p1 < n) answer.push(arr1[p1++]); // p1이 남았다면, answer에 나머지 값들을 쭉 넣는다.
	while (p2 < m) answer.push(arr2[p2++]); // p2이 남았다면, answer에 나머지 값들을 쭉 넣는다.

	return answer;
}

console.log(solution(a, b));
