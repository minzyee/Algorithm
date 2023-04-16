// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 풀이
let num_list = [1, 2, 3, 4, 5];

function solution(num_list) {
	let even = num_list.filter((num) => num % 2 === 0).length;
	let odd = num_list.filter((num) => num % 2 === 1).length;
	return [even, odd];
}
