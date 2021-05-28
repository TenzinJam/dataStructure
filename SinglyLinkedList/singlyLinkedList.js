//let's implement a singly linked list using JS class, and build associated methods needed for a linked list.

let print = console.log

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
//let's compare this with Cold's again because his is more terse. But he also forgot to untether the shifted node from the list
// I implemented his solution, and it's more elegant and much shorter. Line 56 is not intuitive, but if you know how linked lists are structured, then you should be able to decipher sooner or later.
  shift(){
    if(!this.head) return "the list is empty"
    let oldHead = this.head
    this.head = oldHead.next
    oldHead.next = null
    this.length--
    if(this.length === 0) this.tail = null
    return oldHead
  }

  unshift(val){
    let newNode = new Node(val)
    if(this.length === 0) this.head = newNode, this.tail = this.head
    else{
      let temp = this.head
      this.head = newNode
      newNode.next = temp
    }
    this.length++
    return this
  }

  // It might be tempting
  get(idx){
    if(!this.head) return "list is empty"
    if(idx < 0 || idx >= this.length) return `${idx} is an invalid index`

    let counter = 0
    let current = this.head
    while(counter < this.length){
      if(counter === idx) return current.val
      current = current.next
      counter++
    }
  }
}

let list = new SinglyLinkedList()
list.push(5)
list.push(10)
list.push(20)
list.push(-1)
print(list)
// print("added:",list.unshift(34))
// print("added:",list.unshift(14))
// print("added:",list.unshift(12))
// print("added:",list.unshift(6))
// print("added:",list.unshift(8))

print(list.get(2))
