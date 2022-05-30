const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

let input = fs.readFileSync(filePath).toString().trim().split('\r\n')
const [nm, ...rest] = input
const [N, M] = nm.split(' ').map(Number)
const board = rest.map(e => e.split(' ').map(Number))

const brr = []
const zero = []
const two = []
let max_ = 0

const dr = [-1,0,1,0] //행 상 우 하 좌
const dc = [0,1,0,-1] //열 상 우 하 좌


//0과 2의 위치 찾기
for (let i = 0 ; i < board.length ; i++){
  for (let j = 0 ; j < board[i].length ; j++){
    if(!board[i][j]){
      zero.push([i,j])
    } else if (board[i][j] === 2){
      two.push([i,j])
    }
  }
}

// 0의 위치에서 3개를 뽑은 후 벽으로 바꾸어 준다.
const dfs = (cur,start) => {

  if(cur === 3){
    const dump_map = []

    //새로운 board 하나 만들어주기
    for (let i = 0 ; i < N ; i++){
      dump_map.push(board[i].slice())
    }
    
    //벽 바꿔주기
    for (let i in brr){
      dump_map[brr[i][0]][brr[i][1]] = 1
    }

    bfs(dump_map)
    return
  }

  for (let i = start ; i < zero.length ; i++){
    brr.push(zero[i])
    dfs(cur + 1, i + 1)
    brr.pop()
  }
}

const bfs = (dump_map) => {
  
  const visited = new Array(N)
  for (let i = 0 ; i < visited.length ; i++){
    visited[i] = new Array(M).fill(false)
  }
  
  const queue = []
  for (let i in two){
    queue.push(two[i])
  }
  while (queue.length > 0){
    
    const [r , c] = queue.shift()
    
    
    for (let i = 0; i < 4 ; i++){
      const nr = r + dr[i]
      const nc = c + dc[i]
      
      
      if (nr < 0 || nr >= N || nc < 0 || nc >= M || visited[nr][nc] || dump_map[nr][nc] >= 1)
        continue
      
      dump_map[nr][nc] = 2
      visited[nr][nc] = true
      queue.push([nr,nc])
      
    }
  }

  let cnt = 0
  for (let i in dump_map)
    for (let j in dump_map[i])
      if (!dump_map[i][j])
        cnt += 1
    
  if (max_ < cnt)
    max_ = cnt
  
}


  
dfs(0,0)
console.log(max_)

