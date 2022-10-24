// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

// 각 angle이 매개변수로 주어질 때
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution(angle) {
  if(angle > 0 && angle < 90) {
    return 1;
  } else if(angle == 90) {
    return 2;
  } else if(angle < 180) {
    return 3;
  } else if(angle == 180) {
    return 4;
  }
}

console.log(solution(70));  // 예각 -> 1
console.log(solution(90));  // 직각 -> 2
console.log(solution(95));  // 둔각 -> 3
console.log(solution(180)); // 평각 -> 4