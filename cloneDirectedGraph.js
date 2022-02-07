// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.



var cloneGraph = function(node) {
    if(!node) return node;
    let OldToNewMap = new Map();
      function dfs(node){
          if(OldToNewMap.has(node)){
              return OldToNewMap.get(node)
          }
          let clonedNode = new Node(node.val);
          OldToNewMap.set(node,clonedNode);
          node.neighbors.forEach(nei => clonedNode.neighbors.push(dfs(nei)))
          return clonedNode;
          
      }
    return dfs(node);
};
