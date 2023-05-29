// 문제
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단, 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.

// 나의 풀이
// 1. 해당 문자열을 매개변수로 받아온다.
// 2. 대소문자 구분하지 않는다. -> toUpperCase();
// 3. 알파벳 이외의 문자 무시한다(특수문자는 무시하기);

// /[^A-Z]/g : 정규표현식을 나타내는데, 이는 알파벳 대문자가 아닌 모든 문자를 의미한다.
// /g 플래그 :  전역 검색을 나타내는데, 즉 모든 일치하는 문자열을 찾는다.
// replace(정규표현식, ""); -> 첫번째 매개변수로 받은 정규표현식의 문자열 내 모든 공백을 찾아 제거합니다.
// 알파벳 대문자 이외의 문자를 모두 제거하는 정규표현식을 적용한 후, 결과적으로 변환된 문자열을 반환한 것이다.

// 나의 풀이
let string = "found7, time: study; Yduts; emit, 7Dnuof";
function solution(string) {
	let answer = "YES";
	string = string.toUpperCase().replace(/[^A-Z]/g, ""); // 'FOUNDTIMESTUDYYDUTSEMITDNUOF'
	if (string.split("").reverse().join("") !== string) return "NO";
	return answer;
}
console.log(solution(string));

// 해답
let s = "found7, time: study; Yduts; emit, 7Dnuof";
function solution(s) {
	let answer = "YES";
	s = s.toLowerCase().replace(/[^a-z]/g, "");
	if (s.split("").reverse().join("") !== s) return "NO";
	return answer;
}
console.log(solution(s));
