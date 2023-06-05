// 문제
// 양 끝점에 겹치지 않으면 (), () 적어도 4개는 뺴야하나? 왜 2개만 빠질까?
// () --> 2개의 막대기
// ()() --> 3개의 막대기
// ()()() --> 4개의 막대기

function solution(s) {
	let answer = 0;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		// 여는 괄호를 만나면, stack에 push한다.
		if (s[i] === "(") stack.push(s[i]);
		// 닫는 괄호를 만나면, stack에서 pop한다.
		else {
			stack.pop();
			if (s[i - 1] === "(") answer += stack.length;
			else answer++;
			// stack.pop(); // 이 위치에서 stack.pop() 하면 레이저까지 카운팅한다.
		}
	}
	return answer;
}

let a = "()(((()())(())()))(())"; // 22개
let b = "(((()(()()))(())()))(()())"; // 26개

console.log(solution(a)); // 17
console.log(solution(b)); // 24
