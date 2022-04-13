/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/*
OLMASI GEREKEN YARDIMCI FONKSIYONLAR...
KOMŞU SAYICI
UPDATER --> her işlemden sonra update gerekli(eş zamanli....)
*/

var neighborCounter = function(board, m, n){
    //komsulari kontrol et
     //aslinda kendisi disinda bakacagi 8 yer var
     //solust-ust-sagust-sag-sagalt-alt-solalt-sol
     let counter = 0;
     let neighbors = [
         //sol
         board[m][n - 1],
         //sag
         board[m][n + 1]
     ];
 
     if(board[m - 1] !== undefined){
          //solust
         neighbors.push( board[m - 1][n - 1]);
         //ust
         neighbors.push( board[m - 1][n]);
         //sagust
         neighbors.push( board[m - 1][n + 1]);
     }
     //alt
     if(board[m + 1] !== undefined){
         
         //sagalt
         neighbors.push(board[m + 1][n + 1]);
         //alt
         neighbors.push(board[m + 1][n]);
         //solalt
         neighbors.push(board[m + 1][n - 1]);
     }
 
     for(let i = 0; i < neighbors.length; i++){
         if(neighbors[i] !== undefined && neighbors[i] === 1){
             counter++;
         }
     }
     return counter;
 };
 
 
 var gameOfLife = function(board) {
     //m -> board.length
     //n -> board[i].length
     let operationList = [];
     
     for(let m = 0; m < board.length; m++){
         for(let n = 0; n < board[m].length; n++){
             //canli komsularin sayisini getir...
             const neighborCount = neighborCounter(board, m, n);
             const isDead = (board[m][n] === 1) ? false : true;
             //canli komsu sayisi 2'den az ise, öl
             if(!isDead && neighborCount < 2){
                 operationList.push({
                     m: m,
                     n: n,
                     newVal: 0
                 });
             }
             //2 veya 3 canli komşusu olan bir sonraki nesle kadar yasar
             else if(!isDead && (neighborCount === 2 || neighborCount === 3)){
                 operationList.push({
                     m: m,
                     n: n,
                     newVal: 1
                 });
             }
             //3'den fazla canlı komsusu var ise ölür
             else if(!isDead && neighborCount > 3){
                 operationList.push({
                     m: m,
                     n: n,
                     newVal: 0
                 });
             }
             //Tam olarak "3 canlı" komşusu olan "ölü hücre" canlanır
             else if(isDead && neighborCount === 3){
                 operationList.push({
                     m: m,
                     n: n,
                     newVal: 1
                 });
             }
         }
     }
     
     //edit array
     for(let i = 0; i < operationList.length; i++){
         board[operationList[i].m][operationList[i].n] = operationList[i].newVal;
     }
 };
 
 //1 -> live
 //0 -> dead
 
 
 //                            1           1
 //               1  1         1         1
 //neighbors -> horizontal, vertical, diagonal
 
 
 
 //FOUR IMPORTANT RULES!!!!
 /*
  1-) 2'den az canlı komşusu var ise ölüyor...
  2-) 2 veya 3 canlı komşusu olan bir sonraki nesle kadar yasar
  3-) 3'den fazla canlı komsusu var ise ölür
  4-) Tam olarak "3 canlı" komşusu olan "ölü hücre" canlanır 
 */