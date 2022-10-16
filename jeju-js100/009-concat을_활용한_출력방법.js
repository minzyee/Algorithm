// 문제9 : concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
let year = "2019";
let month = "04";
let day = "26";
let hour = "11";
let minute = "34";
let second = "27";

let currentDays = [year, month, day].join("/");
let currentTimes = [hour, minute, second].join(":");

let result =  currentDays.concat(" ", currentTimes);
console.log(result); // 2019/04/26 11:34:27

// 출력 형식
// 2019/04/26 11:34:27