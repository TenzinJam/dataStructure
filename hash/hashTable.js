class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size)
  }
  hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (value*WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    let index = this.hash(key)
    if(!this.keyMap[index]) this.keyMap[index] = [[key, value]]
    else this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this.hash(key)
    //I think you have the option to put an if statement that controls whether the following loop runs or not. I don't thin it is necessary
    for( let item of this.keyMap[index]){
      if(item[0] === key) return item[1]
    }
    return -1
  }

  keys(){
    let keysList = []
    for(let item in this.keyMap){
      if(this.keyMap[item]){
        for(let elem of this.keyMap[item]){
          keysList.push(elem[0])
        }
      }
    }
    return keysList
  }

  values(){
    let valuesList = []
    for(let item in this.keyMap){
      if(this.keyMap[item]){
        for(let elem of this.keyMap[item]){
          valuesList.push(elem[1])
        }
      }
    }
    return valuesList
  }

}

let hash = new HashTable()

hash.set("apple", "cake")
hash.set("orange", "tart")
hash.set("purple", "pastry")
hash.set("blue", "candy")
hash.set("strawberry", "scone")
hash.set("banana", "bread")
hash.set("cherry", "muffin")

console.log(hash)

console.log(hash.get("apple"))
console.log(hash.keys())
console.log(hash.values())
