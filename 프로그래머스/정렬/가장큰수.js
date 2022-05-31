function solution(numbers) {
  let answer = '';

  for (let i = 0 ; i < numbers.length ; i++){
    numbers[i] = numbers[i].toString()
  }

  numbers.sort((a,b) => {
    if(b[0] > a[0])
      return 1
    else if(b[0] < a[0])
      return -1
    else {
      if(b[1] === undefined){
        if(b[0] > a[1])
        return 1
      else if(b[0] < a[1])
        return -1
      else {
        if(!a[2])
          return 1
        else {
          if(b[0] > a[2])
            return 1
          else if(b[0] < a[2])
            return -1
        }

      }
      }
      else if(a[1] === undefined){
        if(b[1] > a[0])
        return 1
      else if(b[1] < a[0])
        return -1
      else {
        if(!b[2])
          return 1
        else {
          if(b[2] > a[0])
            return 1
          else if(b[2] < a[0])
            return -1
        }
      }
      } else {
        if(b[1] > a[1])
          return 1
        else if(b[1] < a[1])
          return -1
        else {
          if(b[2] === undefined){
            if(b[0] > a[2])
            return 1
          else if(b[0] < a[2])
            return -1
          else {
            if(b[1] > a[2])
            return 1
          else if(b[1] < a[2])
            return -1
            }
          }
          else if(a[2] === undefined){
            if(b[2] > a[0])
            return 1
          else if(b[2] < a[0])
            return -1
          else {
            if(b[2] > a[1])
            return 1
          else if(b[2] < a[1])
            return -1
        }
      }
      else {
        if(b[2] > a[2])
              return 1
        else if(b[2] < a[2])
          return -1
        else {
          if(b[3] === undefined){
            if(b[0] > a[3])
            return 1
          else if(b[0] < a[3])
            return -1
          else {
            return 1
          }
          }
          else if(a[3] === undefined){
            if(b[3] > a[0])
            return 1
          else if(b[3] < a[0])
            return -1
          else {
            return -1
          }
        }
      }
    }
  }}}
})

  answer = numbers.join('')
  zero_cnt = 0
  for (let i = 0 ; i < answer.length ; i++ ){
    if (answer[i] === '0')
      zero_cnt += 1
  }

  if (zero_cnt === answer.length)
    answer = '0'

  return answer;
}
