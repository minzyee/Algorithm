function solution(my_string, letter) {
    let reg = new RegExp(letter, "g");
    return my_string.replace(letter, "");
}


function solution(my_string, letter) {
    const answer = my_string.split(letter).join("");
    return answer;
}