function solution(x, n) {
	return Array(n)
		.fill(x)
		.map((valueX, index) => (index + 1) * valueX);
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);

// 빈 배열 n개를 만들고, x로 값을 채우는 배열을 만들 것인데
// map을 사용해 조건에 대한 새로운 배열을 만들어 채워줄 것이다.
// (0 + 1) * 2 = 2
// (1 + 1) * 2 = 4
// (2 + 1) * 2 = 6

// (0 + 1) * 4 = 4
// (1 + 1) * 4 = 8
// (2 + 1) * 4 = 12

// (0 + 1) * -4 = -4
// (1 + 1) * -4 = -8
