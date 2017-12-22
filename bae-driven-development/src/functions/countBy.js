let countBy = (array) => {
  let result = {};
  array.forEach((word) => {
    if(result[word] == undefined) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  });
  return result;
};

export default countBy;
