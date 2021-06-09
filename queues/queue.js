class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val){
    let newNode = new Node(val)
    if(!this.size) this.first = newNode, this.last = newNode
    else{
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this
  }

  dequeue(){
    let dequeued = this.first
    if(!this.size) return null
    if(this.size === 1) this.first = null, this.last = this.first
    else{
      this.first = dequeued.next
      dequeued.next = null
    }
    this.size--
    return dequeued
  }

}

let queue = new Queue()
queue.enqueue(0)
// queue.enqueue(20)
// queue.enqueue('Wanda')
// queue.enqueue(4)
// queue.enqueue(17)
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
