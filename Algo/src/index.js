const diplayFizzBuzz = require('./utils')

const displayFizzBuzz = (number) => {
  const result  = diplayFizzBuzz(number)
  return result
}

console.log(displayFizzBuzz(Math.floor(Math.random() * 100) + 1))