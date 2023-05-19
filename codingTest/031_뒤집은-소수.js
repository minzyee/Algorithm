// 문제
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 나의 풀이
// 1. 숫자를 뒤집는다.
// 2. 해당 숫자가 소수인지 판단한다.
// 3. 소수가 맞으면 answer에 push 한다.

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
function isPrime(num) {
	if (num === 1) return false;
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
	}
	return true;
}
function solution(arr) {
	let answer = [];
	for (let x of arr) {
		let res = 0;
		while (x) {
			let t = x % 10;
			res = res * 10 + t;
			x = parseInt(x / 10);
		}
		if (isPrime(res)) answer.push(res);
	}
	return answer;
}

console.log(solution(arr));
