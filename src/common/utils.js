
const getRandomArray = n => {
  const sortedArrays = [...Array(n).keys()];
  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(Math.random() * i);
    const tempValue = sortedArrays[index];
    sortedArrays[index] = sortedArrays[i];
    sortedArrays[i] = tempValue;
  }
  return sortedArrays;
}

const utils = {
  getRandomArray,
}

export default utils
