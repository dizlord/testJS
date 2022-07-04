function getCommonElements(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i].includes(array2[j])) {
        result.push(array2[j]);
      }
    }
  }
  return result;
}
