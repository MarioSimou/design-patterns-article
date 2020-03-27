const fib = n => {
  if(n < 0){
    return null
  }
  return n < 2 ? n : fib(n-1) + fib(n-2)
}

const decorator = fn => {
  const cache = new Map()
  return (...args) => {
    const key = args.join('')
    if(cache.has(key)){
      return cache.get(key)
    } else {
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

const benchmark = fn => (...args) => {
  const start = Date.now()
  const value = fn(...args)
  const stop = Date.now()
  console.log(`value: ${value}\ttime: ${stop-start}ms`)
}

const newFib = benchmark(decorator(fib))
newFib(40) // value: 102334155        time: 1297ms
newFib(40) // value: 102334155        time: 0ms
