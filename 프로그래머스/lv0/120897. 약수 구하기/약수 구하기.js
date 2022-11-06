// js
function solution(n) {
    return Array(n).fill().map((_, i) => i + 1).filter(v => n % v === 0);
}



// py1
// def solution(n):
//     약수 = []
//     for i in range(1, n+1):
//         if n % i == 0:
//             약수.append(i)
//     return 약수


// py2
// def solution(n):
//     return [i for i in range(1, n+1) if n % i == 0]