function solution(s1, s2) {
    const i = s1.filter((x) => s2.includes(x));
    return i.length;
}