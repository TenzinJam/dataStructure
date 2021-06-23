const graph = require('./graph')
let print = console.log

graph.dfsIterative = function(start){
  let stack = [start]
  let result = []
  let visited = {}
  let current
  visited[start] = true
  while(stack.length){
    console.log(stack)
    current = stack.pop()
    result.push(current)
    this.adjacencyList[current].forEach(neighbor => {
      if(!visited[neighbor]){
        visited[neighbor] = true
        stack.push(neighbor)
      }
    })
  }
  return result
}

print(graph.dfsIterative("A"))
