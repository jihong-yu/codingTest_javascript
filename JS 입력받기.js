const readline = require('readline')

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})

let input = []

rl.on('line', (line) => {
  //한 줄씩 입력 받은 후 실행할 코드
  // 입력 된 값은 N에 저장된다
  const N = line //N입력 받기
  console.log(N)
  //input = line.split(' ').map(el => parseInt(el)) //공백입력 받기
  
  
  //input.push(line) //공백없이 입력받는 방법
  
  //rl.close()
})

rl.on('close', () => {
  // 입력이 끝난 후 실행할 코드
  console.log('여기는 입력이 끝난 후 실행')
  for (let i in input){
    console.log(input[i])
  }
  process.exit()
})


