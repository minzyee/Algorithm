// 문제
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// 나의 풀이
// num_list의 원소를 splice로 잘라내고, answer에 push하면서 num_list의 원소 2개씩 줄어든다.
// num_list의 원소 개수가 0이 되면 해당 while문을 빠져나오게 된다.

let num_list = [1, 2, 3, 4, 5, 6, 7, 8];

function solution(num_list, n) {
	let answer = [];

	// num_list의 길이가 0이 될때까지 진행한다.
	while (num_list.length) {
		answer.push(num_list.splice(0, n));
	}

	return answer;
}

console.log(solution(num_list, 2));

// answer: [[1, 2]] --------------------------> num_list: [3, 4, 5, 6, 7, 8]
// answer: [[1, 2], [3, 4]] ------------------> num_list: [5, 6, 7, 8]
// answer: [[1, 2], [3, 4], [5, 6]] ----------> num_list: [7, 8]
// answer: [[1, 2], [3, 4], [5, 6], [7, 8]] --> num_list: []
