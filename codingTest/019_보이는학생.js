// 문제
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
// 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때,
// 맨 앞에 서 있는 선생님이 볼 수 있는 '학생의 수'를 구하는 프로그 램을 작성하세요.
// (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
function solution(arr) {
	// max는 i 번째 앞의 사람들 중에서 최댓값
	// i 앞의 사람보다 크면 해당 순번을 max에 할당한다.
	let answer = 1; // 키 큰 사람을 카운팅한다. 첫번째 사람은 어차피 보이니까 1로 초기화 한다.
	let max = arr[0]; // 어차피 보이는 첫번째 사람을 초기값으로 셋팅해준다.
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			answer++; // 보이는 사람에 대해 +1 하여 카운팅 해준다.
			max = arr[i]; // 보이는 사람을 max에 할당해준다.
		}
	}
	return answer;
}

console.log(solution(arr));
