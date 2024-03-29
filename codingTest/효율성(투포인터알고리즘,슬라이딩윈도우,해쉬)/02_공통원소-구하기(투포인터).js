// 문제
// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.

// 입력설명
// 첫 번째 줄: 집합 a의 크기 n이 주어진다.
// 두 번쨰 줄: n개의 원소가 주어진다. 원소는 중복되어 주어지지 않는다.
// 세 번째 줄: 집합 b의 크기 m이 주어진다.
// 네 번쨰 줄: m개의 원소가 주어진다. 원소는 중복되어 주어지지 않는다.

// 출력설명
// 두 집합의 공통원소를 오름차순 정렬하여 출력해라.

// 알게된 것
// 두 수를 비교해서 더 작은 값을 가진 포인터를 증가시키고 또 비교하는 식으로 진행한다.
// 투포인터 알고리즘을 사용하면 시간복잡도가 확연히 줄어든다. O(n + m)

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

function solution(arr1, arr2) {
	let answer = [];
	let n = arr1.length; // 5
	let m = arr2.length; // 5
	let p1 = (p2 = 0); // 포인터를 0으로 초기화

	arr1.sort((a, b) => a - b); // [1, 2, 3, 5, 9]
	arr2.sort((a, b) => a - b); // [2, 3, 5, 7, 8]

	while (p1 < n && p2 < m) {
		// 두 값이 같다면
		if (arr1[p1] === arr2[p2]) {
			answer.push(arr1[p1++]); // p1을 추가하고, p1, p2의 인덱스를 동시에 1증가시킨다.(어차피 두 수는 같아서 아무거나 넣어도 된다.)
			p2++;
		}

		// arr1[p1]보다 arr2[p2]의 값이 더 크다면, 포인터 p1을 1증가시킨다.
		// 현재 arr2[p2]의 값은 arr1[p1]의 다음 값들 중에 존재할 수도 있기 때문이다.
		else if (arr1[p1] < arr2[p2]) {
			p1++;
		}

		// arr1[p1]보다 arr2[p2]의 값이 더 작다면, 포인터 p2를 1증가시킨다.
		// 현재 arr1[p1]의 값은 arr2[p2]의 다음 값들 중에 존재할 수도 있기 때문이다.
		else {
			p2++;
		}
	}

	// 포인터 p1, p2 둘 중에 하나라도 해당 배열의 길이보다 크거나 같은 경우 비교할 값이 더 이상 없다는 것이므로 종료한다.
	return answer;
}

console.log(solution(a, b));

// p1과 p2를 비교했을 때, 두 값이 같은 경우에는
// 둘 중 하나를 answer에 push하고, 동시에 두개의 포인터를 1씩 증가해줍니다.

// 그리고 p1과 p2를 비교했을 때, 두 값이 서로 다를 경우에는
// 두 포인터를 비교했을 때 작은 값을 가리키는 포인터를 증가시켜서 또 다시 비교를 합니다.
// 이때 작은 값을 증가시키는 이유는, 이 작은 값 리스트에 다음 큰 값과 공통인 수가 있을 가능성이 있기 때문입니다.

// 그렇게 전부 비교를 하고
// 한 쪽 배열의 탐색이 모두 끝나면 교집합이 없기 때문에 while문을 종료하게 된다.
