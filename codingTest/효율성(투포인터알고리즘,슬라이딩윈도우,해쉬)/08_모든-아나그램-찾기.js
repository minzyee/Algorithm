// 문제
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
// s는 주어진 문자열, t는 s에서 찾을 아나그램
// {b, a, c}, {a, c, b}, {c, b, a} 총 3개이다.

let s = "bacaAacba";
let t = "abc";

// 해시맵 비교
function compareMaps(map1, map2) {
	// console.log(map1.size); // 키의 개수 파악하기. 아나그램은 키의 사이즈가 같아야 함
	if (map1.size !== map2.size) return false;

	// 키 값이 정확하게 같은지 확인하기
	for (let [key, val] of map1) {
		// map1에 있는 key가 map2에 없으면 false. / map2의 value !== mqp1의 value
		// map1에 있는 key가 map2에 있다면, map2의 value 값 가져오기
		if (!map2.has(key) || map2.get(key) !== val) return false;
	}

	return true;
}

function solution(s, t) {
	let answer = 0; // 카운팅
	let tH = new Map();
	let sH = new Map();

	for (let x of t) {
		if (tH.has(x)) tH.set(x, tH.get(x) + 1); // tH에 x가 있으면 카운팅하기
		else tH.set(x, 1); // tH에 x가 없으면 해당 key에 value를 1로 셋팅하기
	}

	let leng = t.length - 1; // 찾을 문자열 t보다 하나 작은 길이로 셋팅하기 위함
	for (let i = 0; i < leng; i++) {
		if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
		else sH.set(s[i], 1);
	}

	// 투포인터로 슬라이딩윈도우 반복문 실행하기(슬라이딩윈도우의 for문은 rp가 끝남과 동시에 종료됨)
	let lp = 0;
	for (let rp = leng; rp < s.length; rp++) {
		if (sH.has(s[rp])) sH.set(s[rp], sH.get(s[rp]) + 1); // 2. 추가하고
		else sH.set(s[rp], 1);

		// 두 맵이 같은지 비교하기
		if (compareMaps(sH, tH)) answer++; // 3. 비교하기(두 맵이 같으면 answer 카운팅하기)
		sH.set(s[lp], sH.get(s[lp]) - 1); // 1. 빼고

		if (sH.get(s[lp]) === 0) sH.delete(s[lp]); // sH에서 해당 키 값이 0이면 키 삭제하기
		lp++;
	}
	// console.log(sH);
	// console.log(tH);

	return answer;
}

console.log(solution(s, t));
