const graph = require('./graph')
let print = console.log

graph.graphBfs = function(vertex){
  let queue = [vertex]
  let result = []
  let visited = {}
  visited[vertex] = true
  let current
  while(queue.length){
    current = queue.shift()
    result.push(current)
    for(let node of this.adjacencyList[current]){
      if(!visited[node]) {
        visited[node] = true
         queue.push(node)
      }
    }
  }
  return result
}

print(graph.graphBfs("A"))
