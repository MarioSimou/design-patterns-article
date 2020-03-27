
const find = (stack = [], index) => {
  if(index > stack.length - 1 || index < 0 ){
    return null
  }

  let counter = 0
  const handleFind = (stack, index) => {
    const value = stack.shift()
    return index === counter ? value : ++counter && handleFind(stack, index)
  }
  // since arrays are pass by reference in js, we recreate it so we avoid any side-effects
  return handleFind(stack.slice(0),index)
}

const arr = [10,5,101,14,2]
console.log(find(arr, 2)) // 101
console.log(find(arr, -1)) // null
console.log(find(arr, 5)) // null
console.log(find(arr, 4)) // 2