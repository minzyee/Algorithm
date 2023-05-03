// 문제
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 나의 풀이
// filter 메서드를 이용해 풀어보았다.
// 1. 대소문자 구별을 하지 않기 위해 toUpperCase() 메서드로 문자열을 전부 대소문자 처리했다.
// 2. 문자열을 배열로 만든 후 각 P와 Y만 필터링 하여 개수를 구했다.
// 3. 조건에 따른 결과를 리턴하도록 했다.
function solution(s) {
	let arr = s.toUpperCase().split(""); // 문자열을 전부 대소문자 처리 후, 배열로 만듦
	let count_P = arr.filter((wordP) => wordP === "P").length; // P의 개수
	let count_Y = arr.filter((wordY) => wordY === "Y").length; // Y의 개수

	if (count_P === count_Y || (count_P === 0 && count_Y === 0)) {
		return true;
	} else {
		return false;
	}
}

// 방법 2
function solution(s) {
	return (
		s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
	);
}
