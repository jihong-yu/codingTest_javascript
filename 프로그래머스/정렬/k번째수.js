function solution(array, commands) {
  
  const answer = []

  for (let i = 0 ; i < commands.length ; i++){
    const new_array = array.slice(commands[i][0] - 1,commands[i][1])
    new_array.sort((a , b) => {
      return a - b
    })
    answer.push(new_array[commands[i][2] - 1])
  }

  return answer
}