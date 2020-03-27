const arr = [2,4,9]

// reduce
const sum = (...args) => args.reduce((acc,v) => acc + v,0)
console.log(sum(...arr)) // 15 
// map
const sqrt = n => n ** 0.5
console.log(arr.map(sqrt))
// filter
const condition = n => n > 4
console.log(arr.filter(condition))