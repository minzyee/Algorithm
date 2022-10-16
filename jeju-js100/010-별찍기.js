// 문제10 : 별 찍기
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.
// 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
// 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. (왜그래 은비야,,
// 은비를 위해 프로그램을 작성해 주세요. (제가요,,?


// 은비를 위한 가운데 정렬 별 찍기
let inputStar = parseInt(prompt('몇 줄짜리 트리 만들거니?', ''));
let star = "";

for (let i = 0; i < inputStar; i++) { // 별이 몇 줄 찍히는지
  for (let j = 0; j <= (inputStar - i); j++) { // 별 중앙으로 위치
    star += " ";
  }

  for (let k = 0; k <= (i * 2); k++) { // 별을 찍게 하는 곳
    star += "*";
  }
  star += "\n"; // 개행 구간
}
console.log(star);


// 기본 별 찍기
// let star = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);


// 두 개씩 별 찍기
// let star = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= i * 2; j++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);
