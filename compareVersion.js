const compareVersion = (version1,version2) => {
    var arrValue;
    for (var i=0; i < version1.length; i++) {
        if(version1[i]!=version2[i]){
            console.log(version1)
            console.log(version1)
            arrValue=compareNum(version1[i],version2[i]);
            if (arrValue > 0) {
                 return 1
            };
             if (arrValue < 0) {
                 return 2
            };
             break;
        };

    };
    return 0
};