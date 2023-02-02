function solution(n) {
	return n
		.toString()
		.split("")
		.reverse()
		.map((numArr) => Number(numArr));
}
solution(12345); // [5, 4, 3, 2, 1]
