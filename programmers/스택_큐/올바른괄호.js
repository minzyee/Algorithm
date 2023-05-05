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
// 해당 문제에서 스택 자료구조를 사용하는 이유는 가장 최근에 매칭될 데이터에 따라서 배열 안의 데이터를 처리할 것이기 때문이다.

// string이라는 문자열을 매개변수로 받아와서 반복문을 통해서
// 열린 괄호와 매칭될 때는 stack에 추가하고, 닫힌 괄호와 매칭될 때는 stack에서 제거한다.

// let s = "()()"; // true
let s = "(())()"; // true
// let s = ")()("; // false
// let s = "(()("; // false

// ( ( ) ) ( )
// 0 1 2 3 4 5

function solution(s) {
	let answer = true; // 초기값 설정
	let stack = []; // 열린 괄호와 닫힌 괄호를 각각 담아둘 변수 stack

	// for문을 통해서 string의 각 문자열을 매칭시킨다.
	// 열린 괄호와 닫힌 괄호를 매칭 시키는 반복문
	for (let i = 0; i < s.length; i++) {
		// 문자열이 열린 괄호와 매칭되면, stack에 열린 괄호를 넣고
		if (s[i] === "(") {
			stack.push(s[i]);
			console.log("열린 괄호: ", i, stack);
			continue; // 해당 반복문을 다시 반복한다.
		}

		// 닫힌 괄호와 매칭될 때는 stack에서 열린 괄호를 제거할 것이다.
		let openBracket = stack.pop();

		// stack.pop()의 상태가 false가 되면 stack이 빈 상태를 의미한다.
		// stack에 값이 남아있는 동안은 true이다.
		if (openBracket) {
			console.log("닫힌 괄호 만나서 stack.pop() 했을 때: ", openBracket);
			console.log("stack에 담긴 괄호: ", i, stack);
			continue; // 해당 반복문을 다시 반복한다.
		}

		// 매칭이 제대로 안되서 올바르지 않은 괄호일 때 return 되는 값.
		// 닫힌 괄호가 남았을 때 나올 값.
		return false;
	}

	// 위의 for문을 거친 후에 stack에 남은 '열린 괄호' 대한 예외처리 구간이다.
	if (stack.length > 0) {
		return false;
	}

	// 올바른 괄호일 때 return 되는 값 true.
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
