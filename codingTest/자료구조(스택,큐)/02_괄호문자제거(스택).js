// 문제
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고
// 남은 문자만 출력하는 프로그램을 작성하세요.

// 1. 여는 괄호를 스택에 넣는다.
// 2. 그 이후에 들어오는 문자를 스택에 넣는다.
// 3. 닫는 괄호를 만나면 이전의 여는 괄호와 이후의 문자들을 함께 pop한다.

let s = "(A(BC)D)EF(G(H)(IJ)K)LM(N)"; // -> EFLM

function solution(s) {
	let answer = "";
	let stack = [];

	for (let x of s) {
		// x가 닫는 괄호인 경우, stack 배열에서 열린 괄호가 나올 때까지 stack.pop()을 반복한다.
		if (x === ")") {
			while (stack.pop() !== "(");
		}

		// x가 닫는 괄호가 아닐 경우, stack 배열에 x를 추가한다.
		else stack.push(x);
	}
	answer = stack.join("");
	return answer;
}

console.log(solution(s));
