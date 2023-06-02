// 문제
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// 나의 풀이
let arr = [5, 3, 7, 11, 2, 15, 17];
function solution(arr) {
	return Math.min(...arr); // 2
	// return Math.min(arr); // NaN
}

// 문제 풀면서 알게된 것
// Math.min(...arr);으로 하면 예상하는 값이 잘 나오지만,
// Math.min(arr);으로 값이 NaN이 나오는 이유가 뭘까?

// 배열을 함수의 인자로써 사용하려면 apply()를 써야한다고 한다.
// Math.min.apply(객체넘기기, 배열) ==> Math.min.apply(null, arr)
// 객체넘기기는 this에 내가 컨트롤 하고자 하는 객체를 넘기는 것을 의미한다.

// console.log(solution.apply(null, arr)); 이렇게 사용하면,
// Math.min(arr);으로 사용해도 예상하는 값이 잘 나온다.

// 위의 상황을 간편하게 대체하는 것이 spread 전개구문 연산자이다.
// 전개구문 연산자는 배열을 펼쳐준다.
// -> Math.min(...arr);
// -> Math.min(arr[0], arr[1], arr[2], arr[3], ..., arr[6])

// 해답
// function solution(arr) {
// 	let answer;
// 	// 아주 큰 숫자로 초기화 해둔다.
// 	let min = Number.MAX_SAFE_INTEGER; // 안정적인 가장 큰 정수 값

// 	for (let i = 0; i < arr.length; i++) {
// 		// arr[i]의 값이 min 보다 작으면 true가 된다.
// 		// 반복문을 처음 돌려서 i가 0일 때는 무조건 참이 된다. 그래서 첫 번째 원소는 무조건 min에 할당된다.
// 		if (arr[i] < min) min = arr[i];
// 	}
// 	// 현재는 2가 가장 작기 때문에 나머지 원소는 false가 되고, 최종적으로 answer에는 2가 할당된다.
// 	answer = min;
// 	return answer;
// }

console.log(solution(arr));
// console.log(solution.apply(null, arr));
