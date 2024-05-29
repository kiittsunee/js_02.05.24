const compareVersion = (version1,version2) => {
    var arr1 = version1.split('.')
    var arr2 = version2.split('.')
    const len = Math.max(arr1.length, arr2.length)
    for (let i=0; i < len; i++) {
        if(arr1[i]!=arr2[i]){
            arrValue = arr1[i] - arr2[i];
            if (arrValue > 0) {
                return 1
            };
            if (arrValue < 0) {
                return -1
            };

            break;
        };
    };
    return 0
};

module.exports = {compareVersion};