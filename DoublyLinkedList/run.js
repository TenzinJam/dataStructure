const {nodeClass, dllClass}= require('./classAndMethods')
const print = console.log

let list = new dllClass()
list.push(5)
list.push(15)
list.push(6)
list.push(9)
list.push(100)
print(list)
print(list.remove(2))
print(list.get(2))
