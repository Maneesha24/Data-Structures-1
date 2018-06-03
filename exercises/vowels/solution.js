function vowels(str) {
  let count = 0;
  const check = ['a','e','i','o','u'];

  for(let char of str.toLowerCase()){
    if(check.includes(char)){
      count++;
    }
  }
  return count;
}

module.exports = vowels;
