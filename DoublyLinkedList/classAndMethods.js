const print = console.log

class Node{
  constructor(val){
    this.val = val
    this.prev = null
    this.next = null
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
    if(!this.length) {
      this.head = newNode
      this.tail = this.head
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



}

let list = new DoublyLinkedList()
list.push(5)
list.push(15)
list.push(6)
list.push(9)
list.push(100)

print(list)

print(list.pop())
print(list)
