class Node{
  constructor(val){
    this.val = val
    this.next = val
  }
}
//In stack implementation, we cannot use the push and pop methods because pop in Singly LinkedList is not a constant operation. We use shift and unshift instead but will conventionally name them push and pop since that's the functionality they are supposed to imitate.

class Stack{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val){
    let newNode = new Node(val)
    if(!this.size)this.first = newNode, this.last = this.first
    else newNode.next = this.first, this.first = newNode
    this.size++
    return this
  }

  pop(){
    let popped = this.first
    if(!this.size) return null
    if(this.size === 1){
      this.last = null
      this.size--
      return popped
    }
    this.first = popped.next
    popped.next = null
    this.size--
    return popped
  }


}

let list = new Stack()

list.push(3)
list.push(9)
list.push('hello')
list.push('bye')
list.push(15)
console.log(list)
console.log(list.pop())
console.log(list)
