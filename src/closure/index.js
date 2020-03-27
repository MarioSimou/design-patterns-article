const getCounter = () => {
  let counter = 0
  return () => ++counter
}

const counter1 = getCounter()
console.log(counter1())
console.log(counter1())

const counter2 = getCounter()
console.log(counter2())