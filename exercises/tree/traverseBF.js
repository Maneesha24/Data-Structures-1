traverseBF(fn){
  const arr = [this.root];
  while(arr.length){
    const node = arr.shift();
    arr.push(...node.children);
    fn(node);
  }
}
