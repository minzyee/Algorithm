// 문제
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우에,
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단, 반복횟수가 1인 경우 생략합니다.

// 나의 풀이
// 입력: K K H S S S S S S S E
// 출력: K2 H S7 E
// 문자열의 index: 0 ~ 10, 문자열의 length: 11개
let string = "KKHSSSSSSSE";
function solution(string) {
	let answer = "";
	let count = 1;
	// string에 해당 공백을 추가로 더해주는 이유는 압축 시에 마지막 문자열이 압축되지 않을 수 있기 때문이다.
	// 마지막 문자인 'E'가 압축되지 않고 남을 수 있기 때문에 마지막 문자열도 정상적으로 처리하기 위해서 추가한 것이다.
	// 공백을 추가한 string의 length는 12가 된다. 그래서 아래 반복문에서 string.length-1을 해주는 것이다.
	string = string + " ";

	for (let i = 0; i < string.length - 1; i++) {
		// 현재 값과 다음 값을 비교하여 일치하면 count를 1씩 증가시킨다.
		if (string[i] === string[i + 1]) count++;
		else {
			// 그리고 현재 값과 다음 값이 일치하지 않으면(또는 그런 순간이 오면) answer에 해당 값을 할당한다.
			answer += string[i];
			// 그리고 이때 count의 값이 1 이상이면, count를 해당 문자 옆에 함께 표기해준다.
			if (count > 1) answer += String(count);
			count = 1; // 그리고 count를 1로 초기화 해준다.
		}
	}

	return answer;
}
console.log(solution(string));

// 해답
function solution1(s) {
	let answer = "";
	let count = 1; // 앞축될 문자열 내 같은 문자가 나온 횟수를 세는 변수
	s = s + " "; // 문자열 뒤에 공백을 추가한다.

	for (let i = 0; i < s.length - 1; i++) {
		// 현재 문자와 다음 문자가 같으면 count를 1씩 증가한다.
		if (s[i] === s[i + 1]) {
			count++;
		} else {
			// 현재 문자와 다음 문자가 같지 않으면 해당 문자를 answer에 할당한다.
			answer += s[i];
			// 그리고 count가 1보다 크다면, answer에 count값을 문자열로 형변환 한 것을 할당한다.
			if (count > 1) answer += String(count);
			count = 1; // count를 1로 초기화 한다.
		}
	}
	return answer;
}
let s = "KKHSSSSSSSE";
console.log(solution1(s));
