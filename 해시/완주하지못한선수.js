function solution(participant, completion) {
  
  part_dict = {}
  for (let i = 0 ; i < participant.length ; i++){

    if (part_dict[participant[i]]){
      part_dict[participant[i]] += 1
    } else {
      part_dict[participant[i]] = 1
    }
     
  }
  
  let answer = ''
  for (let i = 0 ; i < completion.length ; i++){

    part_dict[completion[i]] -= 1
  }

  for (let i = 0 ; i < participant.length ; i++){
    if (part_dict[participant[i]]){
      answer = participant[i]
    }
  }

  return answer;
}