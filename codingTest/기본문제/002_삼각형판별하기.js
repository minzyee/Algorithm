// 문제
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어질 때,
// 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 나의 풀이
// 삼각형의 조건: '제일 짧은 두 변의 길이를 더한 값' > '가장 긴 변'
// 제일 짧은 두 변의 길이를 더한 값은 '모든 변을 더한 값' - '가장 긴 변'으로 구할 수 있다.

// 1. 가장 긴 변을 찾는다. --> longLing 변수에 담는다.
// 2. '모든 변을 더한 값' - '가장 긴 변' < '가장 긴 변'의 결과가 true이면,
// 삼각형의 조건을 충족하지 못하기 때문에 NO를 리턴하도록 한다.

function solution(a, b, c) {
	let answer = "YES"; // 해당 결과가 삼각형을 만들 수 있으면 YES를 리턴 !
	let longLine; // 가장 긴 변
	let sumLine = a + b + c; // 모든 변을 더한 값

	if (a > b) longLine = a;
	else longLine = b;
	if (c > longLine) longLine = c;

	if (sumLine - longLine < longLine) answer = "NO";
	return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// 해답
// function solution(a, b, c) {
// 	let answer = "YES";
// 	let max;
// 	let sum = a + b + c;

// 	if (a > b) max = a;
// 	else max = b;
// 	if (c > max) max = c;

// 	if (sum - max <= max) answer = "NO";

// 	return answer;
// }
