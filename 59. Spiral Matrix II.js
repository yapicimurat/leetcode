/**
 * @param {number} n
 * @return {number[][]}
 */
 const DIRECTIONS = {
    RIGHT: 0,
    DOWN: 1,
    LEFT: 2,
    UP: 3
};

var createMatrix = function(n){
    const matrix = [];
    for(let i = 1; i <= n; i++){
        const arr = [];
        for(let j = 1; j <= n; j++){
            arr.push(0);
        }
        matrix.push(arr);
    }
    return matrix;
};

var canMove = function(matrix, m, n){
    let result = false;
    if(matrix[m] !== undefined &&  matrix[m][n] !== undefined && matrix[m][n] === 0)        result = true;
    return result;
};

var getNewDirection = function(direction){
    let result = {
        mConstant: 0,
        nConstant: 0,
        newDirection: undefined
    };
    switch(direction){
        case DIRECTIONS.LEFT:
            result.newDirection = DIRECTIONS.UP;
            result.mConstant = -1;
            result.nConstant = 0;
            break;

        case DIRECTIONS.RIGHT:
            result.newDirection = DIRECTIONS.DOWN;
            result.mConstant = 1;
            result.nConstant = 0;
            break;

        case DIRECTIONS.UP:
            result.newDirection = DIRECTIONS.RIGHT;
            result.mConstant = 0;
            result.nConstant = 1;
            break;

        case DIRECTIONS.DOWN:
            result.newDirection = DIRECTIONS.LEFT;
            result.mConstant = 0;
            result.nConstant = -1;
            break;
    }
    return result;
}


var generateMatrix = function(n) {
    const n2 = n * n;
    let currentDirection = DIRECTIONS.RIGHT;
    let mConstant = 0;
    let nConstant = 1;
    let mKeep = 0;
    let nKeep = 0;
    const matrix = createMatrix(n);
    
    for(let i = 1; i <= n2; i++){
        let shouldChange = false;
        matrix[mKeep][nKeep] = i;
       
        if(canMove(matrix, mKeep + mConstant, nKeep + nConstant)){
            //bu direction ile bir sonraki adıma gecebiliyorsa o zaman devam et
            //....
            //ayni sekilde devam et...
            mKeep += mConstant;
            nKeep += nConstant;
            
        }else{
            //bu direction ile bir sonraki adıma gecemiyor ise,
            //yeni yon belirler
            //....
            let result = getNewDirection(currentDirection);
            mConstant = result.mConstant;
            nConstant = result.nConstant;
            currentDirection = result.newDirection;
            mKeep += mConstant;
            nKeep += nConstant;
        }
        
        
    }
    return matrix;
};

