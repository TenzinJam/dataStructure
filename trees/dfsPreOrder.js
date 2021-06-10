let print = console.log
class Node{
  constructor(val){
    this.val = val
    this.right = null
    this.left = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  insert(val){
    let newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while(current !== null){
      if(val === current.val) return `${val} already exists in the tree`
      let leaf = current
      if(val < current.val) {
        current = current.left
        if(!current) leaf.left = newNode
      }
      else {
        current = current.right
        if(!current) leaf.right = newNode
      }
    }
    return this
  }

  find(val){
    if(!this.root === null) return null
    let current = this.root
    while(current !== null){
      if(val === current.val) return true
      if(val < current.val) current = current.left
      else current = current.right
    }
    return false
  }

  depthFirstSearchPreOrder(current = this.root, array=[]){
    if(!current) return
    // console.log(array)
    array.push(current.val)
    this.depthFirstSearchPreOrder(current.left, array)
    this.depthFirstSearchPreOrder(current.right, array)
    return array
  }


}

let BST = new BinarySearchTree()
BST.insert(9)
BST.insert(10)
BST.insert(20)
BST.insert(4)
BST.insert(5)
print(BST)
print(BST.depthFirstSearchPreOrder())
