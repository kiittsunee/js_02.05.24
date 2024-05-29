const chunk = (array, num) => {
    const result = [];
    for (let i = 0; i < array.length; i += num) {
      result.push(array.slice(i, i + num));
    }
    return result;
  };
module.exports = {chunk};
    