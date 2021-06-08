const print = console.log

class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else{
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop(){
    if(this.length === 0) return undefined
    if(this.length === 1) {
      this.length--
      this.head = null
      this.tail = this.head
      return this
    }
    let prev = this.tail.prev
    this.tail.prev = null
    this.tail = prev
    prev.next = null
    this.length--
    return this
  }

  shift(){
    let shifted = this.head
    if(!this.length) return undefined
    if(this.length === 1){
      this.head = null
      this.tail = null
      this.length--
      return shifted
    }
    this.head = shifted.next
    this.head.prev = null
    shifted.next = null
    this.length--
    return shifted

  }

  unshift(val){
    let newNode = new Node(val)
    if(!this.length){
      this.head = newNode
      this.tail = this.head
      this.length++
      return this
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }

  get(idx){
    if(idx < 0 || idx > this.length - 1) return undefined

    if(idx >= Math.floor(this.length/2)){
      let current = this.tail
      for(let i = this.length-1; i >= Math.floor(this.length/2); i--){
        if(i === idx) return current.val
        current = current.prev
      }
    }

    else{
      let current = this.head
      for(let i = 0; i <= Math.floor(this.length/2); i++){
        if(i === idx) return current.val
        current = current.next
      }
    }
  }

  set(idx, val){
    
  }

}

let list = new DoublyLinkedList()
list.push(5)
list.push(15)
list.push(6)
list.push(9)
list.push(100)
print(list)
print(list.get(2.5))

