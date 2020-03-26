class Calculator {
  constructor(value){
    this._value = value
  }
  set value(value){
    this._value = value
  }
  get value(){
    return this._value
  }
  add(v){
    this._value = this._value + v
    return this
  }
  substract(v){
    this._value = this._value - v
    return this
  }
  multiply(v){
    this._value = this._value * v
    return this
  }
  divide(v){
    this._value = this._value / v
    return this
  }
}

const calculator = new Calculator(0)
const value = calculator.add(10)
                        .substract(2)
                        .multiply(3)
                        .divide(4)
                        .value
console.log(value) // 6