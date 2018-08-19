// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, index + size));
    index += size;
  }

  return chunkedArr;

}

module.exports = chunk;


// const chunked = [];
//
// for (elemet of array) {
//   const last = chunked[chunked.length - 1];
//   if(!last || last.length === size) {
//     chunked.push([element])
//   } else {
//     last.push(elemet)
//   }
// }


// const chunkedArr = [];
// while (array.length > 0) {
//   const chunk = array.slice(0, size)
//   chunkedArr.push(chunk);
//   for (elem of chunk) {
//     array.shift();
//   };
// }
//
// return chunkedArr;
