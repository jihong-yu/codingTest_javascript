function solution(genres, plays) {
  
  const gernes_hash = {} //장르별 최대 플레이 횟수를 저장할 해시
  const gernes_cnt = {} // 장르별 각각의 플레이 횟수를 리스트로 저장할 해시

  for (let i = 0 ; i < genres.length ; i++){
    if (gernes_hash[genres[i]]){
      gernes_hash[genres[i]] += plays[i] //각 장르별 플레이 횟수를 계속 더해준다.
      gernes_cnt[genres[i]].push([plays[i],i]) //각 장르별 각각의 플레이 횟수를 리스트에 넣는다.
    } else {
      gernes_hash[genres[i]] = plays[i] //각 장르별 플레이 횟수를 더해준다.
      gernes_cnt[genres[i]] = [[plays[i],i]]  //각 장르별 각각의 플레이 횟수를 리스트로 만든다.
    }
  }

   //각 장르별 최대 횟수를 구하기위해 해쉬값에 있는 key,value 를 배열에 넣어준다.
  const gernes_array = []
  for (let i in gernes_hash){
    gernes_array.push([i,gernes_hash[i]])
  }
  //장르 전체 횟수 정렬
  gernes_array.sort((a,b) => {
    return b[1] - a[1]
  })

  // 장르별 각각의 플레이 횟수를 정렬
  for (let i in gernes_cnt){
    gernes_cnt[i].sort((a,b) => {
      if (b[0] > a[0])
        return 1
      else if (b[0] < a[0]) 
        return -1
      else {
        if (b[1] < a[1])
        return 1
      else if (b[1] > a[1]) 
        return -1
      }
    })
  }
  //정답리스트에 각 장르마다 상위 앨범 2개를 넣어준다. 
  const answer = []
  for (let i = 0 ; i < gernes_array.length ; i++){
    for (let j = 0 ; j < gernes_cnt[gernes_array[i][0]].length ; j++){
      if (j === 2)
        break
      answer.push(gernes_cnt[gernes_array[i][0]][j][1])
    }
  }
  return answer
}