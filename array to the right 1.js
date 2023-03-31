function rotateRight(array) {
    const lastElement = array.pop();
    array.unshift(lastElement);
    return array;
  }
  const array = [1, 2, 3, 4, 5];
 console.log(rotateRight(array)); // [5, 1, 2, 3, 4]
    