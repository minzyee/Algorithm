// js
function solution(numbers) {
    let 정렬된값 = numbers.sort((a, b) => a - b).reverse();
    return 정렬된값[0] * 정렬된값[1];
}


// py
// def solution(numbers):
//     v = list(sorted(numbers, reverse=True))
//     return v[0] * v[1]