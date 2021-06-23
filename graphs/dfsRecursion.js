const graph = require('./graph')

let print = console.log

graph.dfsRecursive = function (vertex){
  if(vertex===null) return
  let result = []
  let visited = { }
  let adjacencyList = this.adjacencyList
  function helper(vertex){
    if(vertex===null) return null
    visited[vertex]= true
    result.push(vertex)
    for(let node of adjacencyList[vertex]){
      if(!visited[node]){
        helper(node)
      }
    }
  }
  helper(vertex)
  return result
}

print(graph.dfsRecursive("A"))
