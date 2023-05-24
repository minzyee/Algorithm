// 문제
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 나의 풀이
// 1. 숫자를 뒤집는다.
// 2. 해당 숫자가 소수인지 판단한다.
// 3. 소수가 맞으면 answer에 push 한다.

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

// 소수: 1과 자기 자신만을 약수로 갖는 수이다. 1은 소수가 될 수 없다.
function isPrime(num) {
	// 1과 자기 자신 이외에 나누어 떨어지는 수가 있으면 소수가 아니기 때문에 false를 반환한다.
	if (num === 1) return false;
	// Math.sqrt(num)으로 num의 제곱근 까지만 반복되게 해도 된다.
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false; // 1이 아닌 num을 2부터 num의 절반까지 반복문 돌렸을 때, 0이 나오면 소수가 아니다.
	}
	return true; // 위의 과정 중 return false 당하지 않고, true까지 도달한 num은 소수라고 판별한다.
}

function solution(arr) {
	let answer = [];

	for (let x of arr) {
		let result = Number(x.toString().split("").reverse().join(""));
		if (isPrime(result)) answer.push(result);
	}

	return answer;
}
console.log(solution(arr)); // [23, 2, 73, 2, 3]

// 해답
// 소수를 판별해주는 함수
function isPrime1(num) {
	// 1과 자기 자신 이외에 나누어 떨어지는 수가 있으면 소수가 아니기 때문에 false를 반환한다.
	if (num === 1) return false; // 1은 소수가 아니다.
	// Math.sqrt(num)으로 num의 제곱근 까지만 반복되게 해도 된다.
	// num이 1이 아니라면, for문 실행한다.
	// num / 2;를 한 이유는 어떤 숫자든 1과 자기자신을 뺀것 중 약수의 가장 큰 값은 자기자신의 절반이다.
	for (let i = 2; i <= parseInt(num / 2); i++) {
		if (num % i === 0) return false; // 1이 아닌 num을 2부터 num의 절반까지 반복문 돌렸을 때, 0이 나오면 소수가 아니다.
	}
	return true; // 위의 과정 중 return false 당하지 않고, true까지 도달한 num은 소수라고 판별한다.
}

function solution1(arr) {
	let answer = [];
	for (let x of arr) {
		let result = 0; // result는 완성된 뒤집은 숫자를 담는 변수
		// x가 0이 되면 멈춘다. 현재 while문은 각 원소를 뒤집어주고있다.
		while (x) {
			let t = x % 10; // x의 나머지(즉, 일의자리)
			result = result * 10 + t; // result에는 result * 10 + 일의자리.
			x = parseInt(x / 10); // x의 몫. 이것이 0이되면 while문은 종료된다.
		}
		// isprime1함수에 뒤집은 숫자를 매개변수를 통해 전달한 뒤, 소수이면 answer에 그 result를 push한다.
		if (isPrime1(result)) answer.push(result);
	}
	return answer;
}
console.log(solution1(arr)); // [23, 2, 73, 2, 3]
