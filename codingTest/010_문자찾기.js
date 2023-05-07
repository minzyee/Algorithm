// 문제
// 한 개의 문자열을 입력받고, 특정문자를 입력받아
// 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// (문자열의 길이는 100을 넘지 않습니다.)

// 나의 풀이
let string = "COMPUTERPROGRAMxMING";
function solution(string, spell) {
	let answer = 0; // 숫자를 누적하여 더하기 위해 0으로 초기화 한다. 안하면 NaN 나옴.
	for (let x of string) {
		// for of 반복문을 사용하며 주어진 문자열과 spell이 일치하면 answer에 누적하여 더한다.
		if (x === spell) answer++;
	}
	return answer;
}

console.log(solution(string, "R"));
