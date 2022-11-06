function solution(array, n) {
    let answer = 0;
    for(num of array) if (num === n) answer++
    return answer;
}


function solution(array, n) {
  return array.filter(v => v === n).length;
}
