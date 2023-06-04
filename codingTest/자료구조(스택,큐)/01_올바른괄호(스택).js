// 문제
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

let a = "(()(()))()"; // YES
let b = "(()(()))(()"; // NO
let c = "(())())"; // NO
let d = "()()"; // YES
let e = "(())()"; // YES
let f = ")()("; // NO
let g = "(()("; // NO

function solution(s) {
	let answer = "YES";
	let stack = [];

	for (let x of s) {
		// 여는 괄호를 만나면, stack에 push
		if (x === "(") stack.push(x);
		// 닫는괄호를 만났을 때,
		else {
			if (stack.length === 0) return "NO"; // stack이 비어있다면 NO 리턴
			stack.pop(); // 그게 아니라면, pop한다.
		}
	}
	if (stack.length > 0) return "NO";
	return answer;
}

console.log(solution(a));
console.log(solution(b));
console.log(solution(c));
console.log(solution(d));
console.log(solution(e));
console.log(solution(f));
console.log(solution(g));
