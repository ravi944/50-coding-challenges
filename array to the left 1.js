function rotateLeft(array) {
    const firstElement = array.shift();
    array.push(firstElement);
    return array;
  }
  const array = [1, 2, 3, 4, 5];
  console.log(rotateLeft(array)); // [2, 3, 4, 5, 1]
  
    