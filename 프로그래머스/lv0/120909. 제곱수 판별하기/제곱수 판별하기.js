function solution(n) {
    if (n == (Math.floor(n ** 0.5)) ** 2){
        return 1;
    }
    return 2;
}


function solution(n) {
    if (n == (~~(n ** 0.5)) ** 2){
        return 1;
    }
    return 2;
}