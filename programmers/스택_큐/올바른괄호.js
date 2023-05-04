// 문제
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
// 예를 들면,
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때,
// 문자열 s가 올바른 괄호이면 true를 return 하고,
// 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 나의 풀이
// stack을 사용하여 문제를 풀이해보려고 한다.
// stack은 가장 마지막(최근)에 들어온 데이터를 가장 먼저 처리하는 자료구조이다.
// 해당 문제에서 stack을 사용하는 이유는

// string이라는 문자열을 매개변수로 받아와서 반복문을 통해서
// 열린 괄호와 닫힌 괄호

// let s = "()()"; // true
// let s = "(())()"; // true
let s = ")()("; // false
// let s = "(()("; // false

// ( ( ) ) ( )
// 0 1 2 3 4 5

function solution(s) {
	let answer = true; // 초기값 설정
	let stack = []; // 열린 괄호와 닫힌 괄호를 각각 담아둘 변수 stack

	// for문을 통해서 string의 각 문자열을 매칭시킨다.
	for (let i = 0; i < s.length; i++) {
		// 해당 순번의 string이 열린 괄호와 일치하면, stack에 넣는다.
		if (s[i] === "(") {
			stack.push(s[i]);
			console.log("열린 괄호: ", i, stack);
			continue;
		}

		// 열린 괄호가 아닌 string[i] === ')' 이면, 기존 stack에 담긴 '(' 열린 괄호를 제거해야한다.
		let openBracket = stack.pop();

		// openBracket의 값이 false가 되면 해당 조건문을 건너뛴다.
		if (openBracket) {
			console.log("닫힌 괄호 만나서 stack.pop() 했을 때: ", openBracket);
			console.log("stack에 담긴 괄호: ", i, stack);
			continue;
		}
		return false;
	}

	// 위의 for문을 거친 후에 stack에 남은 열린 괄호가 존재하면, false를 반환한다.
	if (stack.length > 0) {
		return false;
	}
	return answer;
}

// 열린 괄호 만나서 stack.push() 했을 때:  0 => ['(']
// 열린 괄호 만나서 stack.push() 했을 때:  1 => ['(', '(']

// 닫힌 괄호 만나서 stack.pop() 했을 때:  (
// stack에 담긴 괄호:  2 => ['(']
// 닫힌 괄호 만나서 stack.pop() 했을 때:  (
// stack에 담긴 괄호:  3 => []

// 열린 괄호 만나서 stack.push() 했을 때:  4 => ['(']

// 닫힌 괄호 만나서 stack.pop() 했을 때:  (
// stack에 담긴 괄호:  5 => []
