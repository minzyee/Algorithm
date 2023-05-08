// 문제
// 백설공주와 일곱난쟁이. 일곱 난쟁이가 아홉 난쟁이가 됨.
// 일곱 난쟁이의 키 총 합은 100. 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다.
// 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며,
// 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다. (뭐,,,??

// 이중 for문을 돌려야한다.
// sum - (arr[i] + arr[j]) === 100
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]; // 현재 아홉 난쟁이 키
function solution(arr) {
	let answer = arr; // arr을 얕은 복사 했다. 주소만 공유한 셈.
	let sum = arr.reduce((a, b) => a + b, 0); // 인자 a에 arr[i], 인자 b에 arr[j]

	// 7명의 값을 구할 것이기 때문에 i < 8 로 지정했다. 인덱스는 7까지만 돌아도 되기 때문.
	for (let i = 0; i < 8; i++) {
		for (let j = i + 1; j < 9; j++) {
			// console.log(arr[i], arr[j]);
			if (sum - [arr[i] + arr[j]] === 100) {
				// i 먼저 지우게 되면 뒤에 원래 6번 인덱스의 j를 지울 때 뒤에 것이 당겨져서 숫자 8을 지우게 된다.
				arr.splice(j, 1); // 6번째 j
				arr.splice(i, 1); // 5번째 i
			}
		}
	}

	return answer;
}

console.log(solution(arr));
