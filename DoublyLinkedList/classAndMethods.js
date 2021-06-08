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
      let removed = this.head
      this.length--
      this.head = null
      this.tail = this.head
      return removed
    }
    let removed = this.tail
    let prev = this.tail.prev
    this.tail.prev = null
    this.tail = prev
    prev.next = null
    this.length--
    return removed
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
    if(idx < 0 || idx > this.length - 1) return null

    if(idx >= Math.floor(this.length/2)){
      let current = this.tail
      for(let i = this.length-1; i >= Math.floor(this.length/2); i--){
        if(i === idx) return [current, current.val]
        current = current.prev
      }
    }

    else{
      let current = this.head
      for(let i = 0; i <= Math.floor(this.length/2); i++){
        if(i === idx) return [current, current.val]
        current = current.next
      }
    }
  }

  set(idx, val){
    if(!this.get(idx)) return false
    let node = this.get(idx)[0]
    node.val = val
    return this
  }

  insert(idx, val){
    let newNode = new Node(val)
    if(idx < 0 || idx > this.length) return null
    if(idx === 0) return this.unshift(val)
    if(idx === this.length) return this.push(val)
    if(!this.length) this.head = newNode, this.tail = newNode
    else{
      let nodeInIdx = this.get(idx)[0]
      let previous = nodeInIdx.prev
      previous.next = newNode
      newNode.next  = nodeInIdx
      nodeInIdx.prev = newNode
      newNode.prev = previous
    }
    this.length++
    return this
  }

  remove(idx){
    if(idx < 0 || idx >= this.length) return null
    if(idx === this.length - 1) return this.pop()
    if(idx === 0) return this.shift()
    let removed = this.get(idx)[0]
    let previous = removed.prev
    let next = removed.next
    previous.next = next
    next.prev = previous
    removed.next = null
    removed.prev = null
    this.length--
    return removed
  }

}



exports.nodeClass = Node
exports.dllClass = DoublyLinkedList
