// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 풀이
function solution(array) {
	let maxNum = Math.max(...array); // 배열 안의 가장 큰 수를 구해서 변수에 담는다.
	let maxIndex = array.indexOf(maxNum); // indexOf 메서드를 사용하여 배열의 특정 인덱스를 구한다.

	return [maxNum, maxIndex];
}
