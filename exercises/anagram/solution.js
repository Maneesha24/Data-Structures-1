function anagrams(stringA, stringB) {
  const strA = helperStr(stringA);
  const strB = helperStr(stringB);
  return strA === strB;
}

function helperStr(str){
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
