// 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
// '입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수'를 만들어 주세요.

// 원의 넓이 = (반지름길이 X 반지름길이) X 3.14
// Math.PI.toFixed(자릿수);

let radius = parseInt(prompt("원의 반지름 길이를 입력해주세요."));

function areaOfCircle(radius) {
	return radius * radius * Math.PI.toFixed(2);
}

// 생성자 함수로 원의 넓이 구하기
let radius2 = prompt("원의 반지름 입력");
function Circle(radius2) {
	this.radius = radius2;
}

// Circle의 프로토타입에 getArea() 메서드를 등록해서 불필요한 메서드 중복 제거함
// Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 상속받아 사용할 수 있다.
Circle.prototype.getArea = function () {
	return Math.PI.toFixed(2) * radius2 ** 2;
};

let circle1 = new Circle(radius2);
console.log(circle1); // 3 입력시, 28.26
