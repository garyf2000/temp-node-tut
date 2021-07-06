//synchrized appoach

const {readFileSync, writeFileSync} = require('fs')  //destruct
const first = readFileSync('./content/first.txt','utf8')
//const second = readFileSync('./content/second.txt')    //read as hex
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`)   //default is overwrite any existed file content   
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})   // flag: a   append

const resultSync = readFileSync('./content/result-sync.txt', 'utf-8')

console.log(resultSync)