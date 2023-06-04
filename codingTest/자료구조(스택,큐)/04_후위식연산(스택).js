// 문제
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3 * (5 + 2) - 9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(postfix) {
	let answer = 0;
	let stack = [];

	for (let x of postfix) {
		// console.log(x);
		// 숫자를 만나면, stack에 숫자형으로 형변환 후 push한다.
		if (!isNaN(x)) {
			stack.push(Number(x));
			// console.log("숫자만 담긴 스택: ", stack);
		}
		// 숫자가 아닌 것. 즉 연산자를 만나면
		else {
			// 아래 rp와 lp를 stack.pop()으로 선언하고 초기화 하는 과정에서 stack의 값들이 pop이 된다.
			let rp = stack.pop(); // 오른쪽 피연산자 팝
			let lp = stack.pop(); // 왼쪽 피연산자 팝
			// console.log("뭐가 담길까: ", lp, rp);

			if (x === "+") stack.push(lp + rp); // + 연산자 만나면, lp와 rp 더하기
			else if (x === "-") stack.push(lp - rp); // - 연산자 만나면, lp, rp 빼기
			else if (x === "*") stack.push(lp * rp); // * 연산자 만나면, lp, rp 곱하기
			else if (x === "/") stack.push(lp / rp); // / 연산자 만나면, lp, rp 나누기
			// console.log("계산 후 스택: ", stack);
		}
	}
	answer = stack[0]; // 연산결과는 하나로 나온다.
	return answer;
}

let postfix = "352+*9-";
console.log(solution(postfix));
