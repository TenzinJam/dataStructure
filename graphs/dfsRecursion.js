
let graph = [something]

function dfsRecursive(vertex){
  if(vertex===null) return
  let result = []
  let visited = { }
  function helper(vertex){
    if(vertex===null) return
    visited.push(vertex)
    result.push(vertex)
    for(let node in graph.adjacencyList(vertex)){
      if(!visited[node]){
        helper(node)
      }
    }
  }
  helper(vertex)
  return result
}
