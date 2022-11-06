function solution(n) {
    return n.toString()
        .split('').map(v => +v)
        .reduce((a, c) => a + c);
}

function solution(n) {
    return n.toString()
        .split('')
        .reduce((a, c) => a + parseInt(c), 0);
}