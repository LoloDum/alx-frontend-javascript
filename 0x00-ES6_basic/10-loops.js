export default function appendToEachArrayValue(array, appendString) {
  const diffArray = [];
  for (const value of array) {
    diffArray.push(appendString + value);
  }

  return diffArray;
}
