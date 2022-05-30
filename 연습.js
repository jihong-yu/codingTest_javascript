
const a = [[1,2],[8,7],[9,7]]
const b = [4,5,6]
a.sort((a,b) => {
  
  if (b[1] > a[1]){
    return 1
  } else if(b[1] < a[1]) {
    return -1
  } else {
    if (b[0] > a[0]){
      return 1
    } else if(b[0] < a[0]) {
      return -1
    }
  }
  

})
console.log(a)