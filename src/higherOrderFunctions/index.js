const printHello = () => console.log("Hello World")

const returnHelloFn = () => {
  return printHello
}

returnHelloFn()()


const passHelloFn = fn => fn()
passHelloFn(printHello)