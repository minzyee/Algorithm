// 문제
// 1년의 수업계획을 짜야한다. 수업중에는 필수과목이 있다. 필수과목은 반드시 이수해야 하고, 그 순서도 정해져있다.
// 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면,
// 필수과목은 C, B, A 과목이며 이 순서대로 꼭 수업계획을 짜야한다.
// 여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들 어야 한다는 것.
// C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만,
// C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 된다.

// 매개변수로 필수과목, 수업계획로 들어간다.
// 필수과목이 수업계획의 각 과목에 순서대로 나열되어있는지 확인하는 문제이다.

function solution(need, plan) {
	let answer = "YES";
	let queue = need.split(""); // ['C', 'B', 'A']

	// plan의 문자열을 x로 하나씩 반복한다. queue에 해당 x가 있는지 판별하고,
	for (let x of plan) {
		if (queue.includes(x)) {
			// 그 x가 queue의 맨 앞의 값을 shift 한 값과 다르면 NO를 리턴한다.
			if (x !== queue.shift()) return "NO";
		}
	}
	// for of 반복문을 돌리고나서 queue의 원소가 남아있다면 NO를 리턴한다.
	// 필수과목이 수업계획표의 순서를 참고하지 않았다는 것이기 때문
	if (queue.length > 0) return "NO";
	return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
