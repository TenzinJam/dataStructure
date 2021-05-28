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

  // Since we are only accessing a node and not adding or deleting anything, we do not have to worry about rearranging the head, tail, and next properties. Just find the node and return the value of that node.
  get(idx){
    if(!this.head) return null
    if(idx < 0 || idx >= this.length) return null

    let counter = 0
    let current = this.head
    while(counter < this.length){
      if(counter === idx) return current
      current = current.next
      counter++
    }
  }
//line 87, I don't need to worry about because the get method already has this conditional and we do not need to repeat it here.
//Only thing you need to worry about is what you are returning from the get method. If you are returning the value and not the node, and you are trying to set the argument value as the new value for that node, it does not work. We need to get the node from the get method and then set the value in the set method.
  set(idx, val){
    //if(idx < 0 || idx >= this.length) return `${idx} is an invalid index`
    let current= this.get(idx)
    if(current){
      current.val = val
      return this
    }
    return `${idx} is an invalid index`
  }

  //control flow for this one was a bit of an issue. First three were if conditions followed by one else statement. I had to add else to the 2nd nd the 3rd if statements.
  insert(idx, val){
    let newNode = new Node(val)
    if(idx < 0 || idx > this.length) return null
    else if(idx === 0) this.unshift(val)
    else if(idx === this.length) this.push(val)

    else {
      let previous = this.get(idx-1)
      let next = previous.next
      previous.next = newNode
      newNode.next = next
      this.length++
    }
    return this
  }

  remove(idx){
    if(idx === )
    let oneBeforeRemoved = this.get(idx-1)
    let removed = oneBeforeRemoved.next
    if(removed)
  }

  reverse(){

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

// print(list.get(2))
print(list.insert(0, "hello"))
