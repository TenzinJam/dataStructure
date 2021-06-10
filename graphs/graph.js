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
graph.addVertex(5)
graph.addVertex(10)
graph.addVertex(30)
graph.addVertex(1)
graph.addEdge(1,5)
print(graph)
console.log(graph.removeVertex(1))
