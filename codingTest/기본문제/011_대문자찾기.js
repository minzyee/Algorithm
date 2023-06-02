// 문제
// 한 개의 문자열을 입력받아
// 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

// 나의 풀이
let string = "KoreaTimeGood";
function solution(string) {
	let answer = 0;
	// 각 문자열을 반복하면서, x에 담긴 하나의 문자열과 대문자와 일치할 때 answer에 누적하여 더한다.
	for (let x of string) {
		// string[0] === string[0].toUpperCase(); --> 'K' === 'K' --> true
		// string[1] === string[1].toUpperCase(); --> 'o' === 'O' --> false
		if (x === x.toUpperCase()) answer++;
	}
	return answer;
}
console.log(solution(string));
