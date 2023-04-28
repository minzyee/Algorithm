// 문제
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 풀이
// 1. emergency 배열의 원소 순서를 내림차순 정렬한다. => sorted
//    (이때 원본 배열을 훼손하지 않기 위해 전개구문을 사용한다.)
// 2. emergency의 원소를 가지고 map으로 새로운 배열을 만들어 반환할 것이다.
// 3. indexOf() 메서드를 이용해서 sorted 배열 원소의 인덱스 넘버를 찾는다.

let emergency = [3, 76, 24];

function solution(emergency) {
	let sorted = [...emergency].sort((a, b) => b - a); // [76, 24, 3]
	emergency.map((value) => sorted.indexOf(value) + 1);
}

// indexOf(인덱스번호를 찾을 값): 특정 문자의 위치를 찾을 때 사용한다.
