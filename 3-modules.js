// CommonJS, every file is module (by default)
// Modules - Encasulated Cde (only share minumum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')  //not assign anything, simpley require.
console.log(data)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
