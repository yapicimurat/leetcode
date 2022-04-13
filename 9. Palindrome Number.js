/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    let isPalindrome = true;
    //if count of number digits is even
    //1221 --> iteration count x2
    //else if count of number digist is odd
    //121 --> iteration count x1
    
    let calcIterationCount;
    const convertString = x.toString();
    if(convertString.length % 2 == 0){
        //even
        calcIterationCount = convertString.length / 2;
    }else{
        //odd
        calcIterationCount = Math.floor(convertString.length / 2);
    }
    
    for(let i = 0; i < calcIterationCount; i++){
        if(convertString[i] !== convertString[x.toString().length - i - 1]){
            isPalindrome = false;
            break;
        }
    }
    
    
    
    return isPalindrome;
    
};