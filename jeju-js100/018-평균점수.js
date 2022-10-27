// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// 입출력
// 입력 : 20 30 40
// 출력 : 30

// let score = [20, 30, 40];

let inputScore = prompt('점수 입력하면 평균 구해줌');
let score = inputScore.split(' ');
let scoreNum = score.map(Number); // 문자열 배열을 숫자열 배열로 전환

let sumScore = (prev, curr) => prev + curr;

let avg = scoreNum.reduce(sumScore) / scoreNum.length;

console.log(avg);