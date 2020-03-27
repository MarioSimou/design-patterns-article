const fibMemo = () => {
  const cache = new Map()
  return function fib(n){
    if(n < 0){
      return null
    }
    if (cache.has(n)){
      return cache.get(n)
    } else {
      const result = n < 2 ? n : fib(n-1) + fib(n-2)
      cache.set(n, result)
      return result
    }
  }
}
const fib = n => {
  if(n < 0){
    return null
  }
  return n < 2 ? n : fib(n-1) + fib(n-2)
}

const benchmark = fn => (...args) => {
  const start = Date.now()
  const value = fn(...args)
  const end = Date.now()
  console.log(`value: ${value}\ttime: ${end-start}ms`)
}

const fibMemoBench = benchmark(fibMemo())
const fibPlainBench = benchmark(fib)
fibMemoBench(40)
fibPlainBench(40)