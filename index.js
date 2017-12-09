const { map, times, forEach } = require('ramda')
const moment = require('moment')

const randomArray = times(() => Math.floor(Math.random()*1000000), 10000000)
const length = randomArray.length
const forArrayAsc = []
console.time('Native for asc')
for (let i = 0; i < length; i += 1) {
    forArrayAsc.push(randomArray[i]) 
}
console.timeEnd('Native for asc')

const forArrayDesc = []
console.time('Native for desc')
for (let i = length; i >= 0; i -= 1) {
    forArrayDesc.push(randomArray[i]) 
}
console.timeEnd('Native for desc')

const whileArray = []
console.time('Native while')
let index = 0
while (index < length) {
    whileArray.push(randomArray[index++])
}
console.timeEnd('Native while')

const ramdaArray = []
console.time('Ramda forEach')
forEach(element => {
   ramdaArray.push(element/2)
})(randomArray)
console.timeEnd('Ramda forEach')


const forEachArray = []
console.time('Native forEach')
randomArray.forEach(element => {
    forEachArray.push(element/2) 
})
console.timeEnd('Native forEach')


const forInArray = []
console.time('Native forIn')
for (const element in randomArray) {
    forInArray.push(element/2) 
}
console.timeEnd('Native forIn')


const forOfArray = []
console.time('Native forOf')
for (const element in randomArray) {
    forOfArray.push(element/2) 
}
console.timeEnd('Native forOf')

