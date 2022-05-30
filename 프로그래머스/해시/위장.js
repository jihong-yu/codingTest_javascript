function solution(clothes) {
  

  const hash = {}
  for (let i = 0 ; i < clothes.length ; i++){
    if (hash[clothes[i][1]]){
      hash[clothes[i][1]] += 1
    } else {
      hash[clothes[i][1]] = 1
    }
  }
  
  let answer = 1
  for (let i in hash){
    answer *= (hash[i] + 1)
  }
  
  answer -= 1

  return answer;
}