// 문제
// 상품의 가격과 배송비 제출하기(단, 선생님의 예산은 한정되어있다.)
// 선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있다. 배송비는 할인에 포함되지 않는다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하기
// n(반 학생 수), m(예산)
// 5명(n) 28원(m)  -->   정렬
//  6      6      -->  2   2
//  2      2      -->  4   3
//  4      3      -->  4   5
//  4      5      -->  6   6
//  10     3      -->  10  3

// 모든 경우의 수를 하나하나 구하는 것이 바로 브르투포스...
let arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];

function solution(m, product) {
	let answer;
	let n = product.length; // 학생수
	product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 총 비용으로 sort하기

	for (let i = 0; i < n; i++) {
		// product[i][0]에서 [0]은 가격, product[i][1]에서 [1]은 배송비를 의미한다.
		// money = 전체금액 - 할일 받은 금액
		let money = m - (product[i][0] / 2 + product[i][1]);
		let count = 1;
		for (let j = 0; j < n; j++) {
			// 남은 예산보다 작거나 같아야 구매가 가능하다.
			if (j !== i && product[j][0] + product[j][1] > money) break;
			if (j !== i && product[j][0] + product[j][1] <= money) {
				money -= product[j][0] + product[j][1];
				count++;
			}
		}
		answer = Math.max(answer, count);
	}

	return answer;
}

console.log(solution(28, arr));
