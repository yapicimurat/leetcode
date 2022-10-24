/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = -1;
    for(let i = 0; i < s.length; i++)
    {
        let counter = 0;
        for(let j = 0; j < s.length; j++){
            if(j == i) continue;
            if(s[i] === s[j]) {
                counter++;
                break;
            }
        }
        if(counter === 0){
            result = i;
            break;
        }
    }
    return result;
};
