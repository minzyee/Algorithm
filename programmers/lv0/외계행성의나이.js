// 문제
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 풀이
// 1. Number 타입의 age를 유사배열 객체인 문자열로 만든다. -> ['23']
// 2. Array.from() 메서드를 통해 배열로 만든다. -> ['2', '3']
// 3. 추출해낸 배열을 map() 메서드를 이용해 char의 인덱스 번호로 넣어서 인덱스 번호에 해당하는 문자열을 찾는다. -> ['c', 'd']
// 4. join() 메서드를 이용해 배열을 문자열로 만든다.

let age = 23;
function solution(age) {
	let char = "abcdefghij";
	return Array.from(age.toString())
		.map((charIndex) => char[charIndex])
		.join("");
}
