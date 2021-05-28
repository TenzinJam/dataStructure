//let's implement a singly linked list using JS class, and build associated methods needed for a linked list.


class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)
    if(!this.head) this.head = newNode, this.tail = this.head
    else this.tail.next = newNode, this.tail = newNode
    this.length++
    return this
  }

  // pop is a little tricky because there are a few edge cases that you can only discern by testing the methods. So be sure to test those
  
  pop(){
    if(!this.head) return undefined
    // if(this.head === this.tail) {
    //   let popped = this.head
    //   this.head = null
    //   this.tail = null
    //   this.length--
    //   return popped.val
    // }
    let current = this.head
    let newTail = current
    while(current.next) newTail = current, current = current.next

    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) this.head = null, this.tail = null
    return current.val
  }
}

let list = new SinglyLinkedList()
list.push(5)
list.push(10)
list.push(20)
list.push(-1)
console.log(list)
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list)
