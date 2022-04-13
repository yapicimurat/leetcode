/**
 * @param {string} s
 * @return {number}
 */
 const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
var romanToInt = function(s) {
    //start to read from right to left....
    let valueAdder = 0;
    for(let i = s.length - 1; i >= 0; i--){
        const afterCharacter = s[i - 1];
        const afterValue = values[s[i - 1]];

        valueAdder += values[s[i]];
        if((afterCharacter === "X" || afterCharacter === "I" || afterCharacter === "C") && afterCharacter !== s[i] && (afterValue < values[s[i]])){
                valueAdder -= afterValue;
                i--;
        }
    }
    return valueAdder;
};

//4, 9, 40, 90, 400, 900 ....
/*
I -> 1
II -> 2
III -> 3
IV -> 4
V -> 5
VI -> 6
VII -> 7
VIII -> 8
IX -> 9
X -> 10
--------------------
L -> 50
C -> 100
D -> 500
M -> 1000
*/

