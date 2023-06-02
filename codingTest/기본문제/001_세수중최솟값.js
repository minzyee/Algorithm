// 문제
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
// (정렬을 사용하면 안됩니다)

// 1) 나의 풀이
function solution(a, b, c) {
	let answer;

	// a와 b를 비교한 후 a가 작으면 answer에 a 할당.
	if (a < b) {
		answer = a;
		console.log("첫번째 조건문: ", answer);
	}

	// 위의 결과가 거짓이면 b가 더 작으니 b를 할당.
	else {
		answer = b;
		console.log("두번째 조건문: ", answer);
	}

	// 위에서 얻은 answer를 바탕으로 c와 비교.
	// c가 answer보다 더 작으면 c를 할당하고, 그렇지 않으면 해당 반복문을 나온다.
	if (c < answer) {
		answer = c;
		console.log("세번째 조건문: ", answer);
	}
	return answer; // 위의 결과에서 최종으로 얻은 answer의 값을 리턴한다.
}

// console.log(solution(2, 3, 1));
console.log(solution(6, 5, 11));

// 2) 나의 풀이
// 하지만 이건 매개변수로써 사용되는 자연수 A, B, C를 입력받지 않아서 안되겠지...?
// let num = [6, 5, 11];
// function solution(num) {
// 	return Math.min(...num);
// }

// 해답
// function solution(a, b, c) {
// 	let answer;
// 	if (a < b) answer = a;
// 	else answer = b;
// 	if (c < answer) answer = c;
// 	return answer;
// }
// console.log(solution(2, 5, 1));

// 문제 풀면서 알게된 것
// 처음에는 if문 안에 return을 넣었더니 테스트 콘솔이 예상대로 출력이 되지 않았다.
// 1이 제일 작은데 2가 나온다던가 하면서 말이다...
// if문 안에 return을 제거하고나서 문제가 해결됐다.
