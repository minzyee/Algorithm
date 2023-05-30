// 문제
// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

// 해쉬맵(HashMap) 이란?
// 해싱이란 해시 함수를 이용해서 데이터를 해시 테이블에 저장하고 검색하는 기법을 말한다.
// 해시맵: 저장은 느리지만 많은 양의 데이터를 검색하는데 뛰어난 성능을 보인다.
// 트리맵: 해시맵에 비해 저장이 빠르지만 데이터를 가져올 땐 약간 느리다.

let s = "BACBACCACCBDEDE";
function solution(s) {
	let answer;
	let map = new Map();

	for (let x of s) {
		// 기존 값이 있으면 해당 값에 +1,
		if (map.has(x)) {
			map.set(x, map.get(x) + 1);
		} else {
			map.set(x, 1); // 기존 값이 없으면 새로 셋팅
		}
	}

	let max = Number.MIN_SAFE_INTEGER; // 가장 작은 값으로 초기화
	for (let [key, value] of map) {
		// console.log(key, value);
		if (value > max) {
			max = value;
			answer = key;
		}
	}

	return answer;
}

console.log(solution(s));
