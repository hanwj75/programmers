function solution(n, m, section) {
let count = 0
let endPoint = 0
for(let i=0;i<section.length;i++){
    if(section[i]>endPoint){
        count++
        endPoint = section[i]+m-1
    }
}return count
     
  }


//페인트가 칠해진 길이 = n
//1미터 길이의 구역n개로 나눔
//각 구역에 왼쪽부터 순서대로 1부터 n
//페인트를 질하는 롤러의 길이 = m
//롤러가 벽에서 벗어나면안됨/구역의 일부분만포함되면 안됨
//다시 칠할 구역은 한번 이상 페인트칠 해야함
//페인트를 칠하기로 정한 구역들의 번호 = section

