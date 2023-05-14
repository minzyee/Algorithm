// 문제
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 '최소거리'를 출력하는 프로그램을 작성하세요.
// s: 문자열 -------> teachermode
// t: 하나의 문자 ---> e

// 나의 풀이
// 0 1 2 3 4 5 6 7 8 9 10 // 문자열의 인덱스
// t e a c h e r m o d e // 문자열
// 1 0 1 2 1 0 1 2 2 1 0 // e와의 최소거리

// 만약에 eCount가 몇 이상이 되면 다시 0부터 센다. 라는 기준을 어떻게 만들어야하지?
// 앞에서 e를 쟀을때와 뒤에서 e를 쟀을 때를 비교해야하나?

let string = "teachermode";
let word = "e";
let eCount = 0;
function solution(string) {
	let answer = "";
	// let eCount = 0;
	for (let i = 0; i < string.length; i++) {
		// console.log(i, string[i]);
		// 만약에 문자 e와 일치하는 count를 일단 재보자.
		// if (string[i] === "e") {
		// 	console.log(i);
		// 	string[i].indexOf("e");
		// }
		// console.log(string[i], string[i].indexOf("e") + 1);
		console.log((eCount += string[i].indexOf("e") + 1));
		if (string[i].indexOf("e") + 1 || string[i].lastIndexOf("e") + 1) {
		}

		// console.log(string[i], string[i].lastIndexOf("e"));
	}

	// for (let x of string) {
	// 	if (x === "e") answer += x;
	// }

	return answer;
}

console.log(solution(string));
