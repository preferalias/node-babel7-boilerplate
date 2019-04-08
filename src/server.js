import fs from 'fs'

function log(Class) {
  return (...args) => {
    console.log(args)
    return new Class(...args)
  }
}

@log
class Example {
  constructor(name, age) {}
}

const e = new Example('Graham', 34)
// [ 'Graham', 34 ]
// console.log(e)
// Example {}
