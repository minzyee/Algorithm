// 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 '학생의 이름이 key'이고 'value가 수학 점수'인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

let nameKey = prompt("이름 입력").split(" "); // 문자를 공백으로 구분해서 배열로 만든다.
let scoreValue = prompt("점수 입력").split(" "); // 문자를 공백으로 구분해서 배열로 만든다.
let studentsInfo = {}; // 빈 객체 생성

for (let i = 0; i < nameKey.length; i++) {
	// 빈 객체 studentsInfo[nameKey[0]] = parseInt(scoreValue[0], 10);
	studentsInfo[nameKey[i]] = parseInt(scoreValue[i], 10);
}

console.log(studentsInfo);
