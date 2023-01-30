function solution(arr) {
	let answer = arr.reduce((item1, item2) => item1 + item2) / arr.length;
	return answer;
}
