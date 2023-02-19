const xor = (arr1, arr2) => {
    result = arr1.concat(arr2);
    function unique(value, i, result) {
        return result.filter((item) => item === value).length === 1;
      }
    return result.filter(unique);
    };
      
console.log(xor([2, 1], [2, 3]));
 
const take = (arr, n) => {
  result = [];
  for (let i = 0; i < n; i++ ) {
    result.push(arr[i])
  }
     return result
};

console.log(take([3, 7, 8, 5], 2))

module.exports = {
    xor,
    take
};