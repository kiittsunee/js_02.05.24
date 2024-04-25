const compareVersion = (version1,version2) => {
    var arrValue;
    if(version1.length > version2.length) {
        return 1
    }
    for (let i=0; i < version1.length; i++) {
        if(version1[i]!=version2[i]){
            console.log(version1)
            console.log(version2)
            arrValue = version1[i] - version2[i];
            if (arrValue > 0) {
                return 1
            };
            if (arrValue < 0) {
                return -1
            };

            break;
        };
    };
    console.log(version1)
    console.log(version2)
    return 0
};

module.exports = {compareVersion};