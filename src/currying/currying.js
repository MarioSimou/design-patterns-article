const curried = fn => function handleCurrying(...args){
    if(args.length < fn.length){
      return (...newArgs) => handleCurrying(...args, ...newArgs)
    } else {
      return fn(...args)
    } 
  }

const addition = (a,b,c) => a + b + c
const additionCurried = curried(addition)

console.log(additionCurried(1))
console.log(additionCurried(1)(2))
console.log(additionCurried(1)(2)(3))
