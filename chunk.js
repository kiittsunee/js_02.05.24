const chunk = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        res = (arr.slice(i, i + chunkSize));
    }

    return res;
};

module.exports = {chunk};
    