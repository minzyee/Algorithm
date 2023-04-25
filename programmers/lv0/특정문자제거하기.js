// 문제
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// "BCBdbe" - "B" => "Cdbe"

// 매개변수
let my_string = "BCBdbe";
let letter = "B";

// 풀이 1)
function solution(my_string, letter) {
	// my_string - letter
	return my_string.split(letter).join("");
}

// 개념
// split(): 특정 문자열을 제거할 때 사용
// let string = "aa bb cc dd";
// string.split(); // ['aa bb cc dd']
// string.split(" "); // ['aa', 'bb', 'cc', 'dd']

// 풀이 2)
function solution(my_string, letter) {
	let reg = new RegExp(letter, "g"); // /B/g => 전역에서 letter에 담긴 "B"라는 문자열을 찾겠다는 뜻
	return my_string.replace(reg, ""); // 문자열 my_string에서 reg(/B/g)를 모두 찾아 빈 문자열("")로 재배치하겠다.
}

// 개념
// Regex(Regular Expression): 정규표현식은 "특정 패턴의 문자열"을 찾기 위한 표현 방식
// g(global): '모든 문자 검색'하는 정규표현식 플래그
// new Regex('문자열', g): 전역에서 '문자열'을 찾겠다는 의미
// 문자열.replace('문자열', ""): '문자열'을 빈 문자열("")로 재배치 한다는 의미
