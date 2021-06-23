let graph = { something }

function graphBfs(vertex){
  let queue = []
  let result = []
  let visited = {vertex: true}
  while(queue.length){
    result.push(queue.shift(vertex))
    for(let node of graph.adjacencyList[vertex]){
      if(!visited[node])
      visited[node] = true
      queue.push(node)
    }
  }
  return result
}
