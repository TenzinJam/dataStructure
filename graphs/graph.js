let print = console.log

class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = []
    return this
  }

  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
    if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)
    return this
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(elem => elem !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(elem => elem !==vertex1)
    return this
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      let removedVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, removedVertex)
    }
    delete this.adjacencyList[vertex]
    return this
  }
}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C", "E")
graph.addEdge("D","E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

module.exports = graph
