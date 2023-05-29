// 문제
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// 나의 풀이
// 1. 매개변수로 받은 문자열에서 숫자만 추출해야한다.
// 2. 그러기 위해서는 문자열을 모두 소문자로 변환 후, 문자열을 제거한 형태 또는 숫자만 추출하는 형태의 정규표현식 작성하기

// ----> replace(정규표현식, '')
// ----> gi 플래그: 전역에서 대소문자 구분 없이
// ----> string.replace(/[a-z]/gi, ""); // 문자열 전역에서 대소문자 구분없이 문자열 제거하기
// ----> string.replace(/[^0-9]/g, ""); // 문자열 전역에서 숫자만 추출하기

// 3. 추출하고 난 숫자로 이루어진 문자열을 숫자로 변환한다. -> Number() or parseInt()

let string = "g0en2T0s8eSoft";
function solution(string) {
	let answer = parseInt(string.replace(/[^0-9]/g, ""));
	return answer;
}
console.log(solution(string));

// 해답
// isNaN(): 숫자인지 아닌지 판별해주는 함수이다. 전달된 값이 숫자가 아니면 true, 숫자이면 false를 반환한다.
let str = "g0en2T0s8eSoft";
function solution(str) {
	let answer = "";
	// 1. 변수 str에 담긴 문자열을 반복문을 돌린다.
	// 2. 만약에 각 원소로 받은 x가 숫자이면, 변수 answer에 담는다.
	// 3. parseInt() 메서드를 통해 answer를 숫자형으로 형변환 해준다.
	for (let x of str) {
		if (!isNaN(x)) answer += x;
	}
	return parseInt(answer);
}

console.log(solution(str));
