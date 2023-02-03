function solution(n) {
	let numPow = Math.sqrt(n);
	if (n % numPow === 0) {
		return (numPow + 1) ** 2;
	} else {
		return -1;
	}
}
