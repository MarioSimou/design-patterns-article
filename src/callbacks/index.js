const delay = (fn, duration = 1000) => {
  return new Promise((resolve,reject) => {
    if(duration < 0 ){
      return reject("Please provide a positive duration")
    }
    const cb = duration => resolve(fn(duration))  
    setTimeout(cb, duration, duration)
  })
}

const cb = data => console.log(`I have been called after ${data} milliseconds`)

delay(cb, 2000)