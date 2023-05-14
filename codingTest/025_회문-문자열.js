// 문제
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 나의 풀이
// 1. 문자열을 매개변수로 넘겨받는다.
// 2. 기존 문자열과 리버스를 적용한 문자열을 조건문으로 비교한다.

let string = "gooG";
function solution(string) {
	let answer = "YES";
	let reverse = string.split("").reverse().join("");

	if (string.toUpperCase() === reverse.toUpperCase()) return answer;
	else return (answer = "NO");
}

console.log(solution(string));

// 해답 1
let s = "goooG";
// g o o o g
// 0 1 2 3 4
function solution1(s) {
	let answer = "YES";
	s = s.toLowerCase(); // gooog
	let leng = s.length; // 5

	// 왜 Math.floor(leng / 2)를 해주는걸까? --> 아앗 해당 문자열의 중간 값을 구하기 위해서이다.
	for (let i = 0; i < Math.floor(leng / 2); i++) {
		if (s[i] !== s[leng - i - 1]) {
			// s[0] !== s[5-0-1] --> s[0] !== s[4] 해당 인덱스의 제일 처음인 0번 인덱스와 제일 끝인 4번 인덱스가 일치하지 않으면 NO
			// s[1] !== s[5-1-1] --> s[1] !== s[3] 해당 인덱스의 1번 인덱스와 3번 인덱스가 다르면 NO
			// s[2] !== s[5-1-2] --> s[2] !== s[2] 해당 인덱스의 중간 값이기 때문에 값이 다를리가 없다. 때문에 i<2 인 것이다.
			return "NO";
		}
	}
	return answer;
}

console.log(solution1(s));

// 해답 2
function solution2(s) {
	let answer = "YES";
	s = s.toLowerCase(); // 매개변수로 받는 문자열을 모두 소문자로 전환한다.
	// s.split('') -> ['g', 'o', 'o', 'o', 'g']
	// .reverse() -> ['g', 'o', 'o', 'o', 'g']
	// .join('') -> 'gooog'
	// 뒤집힌 문자열과 매개변수로 받아온 문자열이 서로 다르면 'NO'를 리턴한다.
	if (s.split("").reverse().join("") !== s) return "NO";
	return answer; // 그게 아니라면 기존 값 'YES' 리턴하기
}

console.log(solution2(s));
