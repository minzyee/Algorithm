let s = "(()(()))(()";

function solution(s) {
	let answer = "YES";
	let stack = [];
	let close = stack.pop();

	for (let x of s) {
		if (x === "(") stack.push(x);
		else close;
	}
	console.log(stack);

	return answer;
}

console.log(solution(s));
