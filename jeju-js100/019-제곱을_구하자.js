// 문제: 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 공백으로 구분해라 -> split(" "); 사용
// split() 메서드는 문자열을 배열로 반환
// parseInt(string, radix); // radix는 string을 읽을 진법으로 옵션값이다.

let num = prompt("두 수를 입력하세요.").split(" ");
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));

// 처음에 문제 이해를 못했을 때 풀이했던 방법
let pow = (a, b) => Math.pow(a, b);
console.log(pow(2, 3));
console.log(pow(4, 2));
console.log(pow(3, 3));
