function solution(x, n) {
	return Array(n)
		.fill(x)
		.map((value, index) => (index + 1) * value);
}

solution(2, 5);
solution(4, 3);
