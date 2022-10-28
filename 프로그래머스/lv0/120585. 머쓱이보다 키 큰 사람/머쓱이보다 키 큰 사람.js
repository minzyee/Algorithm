function solution(arr, height) {
  return arr.filter(friendsHeight => friendsHeight > height).length;
}