traverseDF(fn){
  const arr = [this.root];
  while(arr.length){
    const node = arr.shift();
    arr.unshift(...node.children);
    fn(node);
  }
}
