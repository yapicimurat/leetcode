public class Solution
{
    public int HammingDistance(int x, int y) 
    {
        string binaryX = Convert.ToString(x, 2);
        string binaryY = Convert.ToString(y, 2);
        //tamamla
        int dist = Math.Abs(binaryX.Length - binaryY.Length);
        string temp = "";
        if(binaryX.Length > binaryY.Length){
            temp = binaryY;
            binaryY = "";
            for(int i = 1; i <= dist; i++){
                binaryY += "0";
            }
            binaryY += temp;
        }else{
            temp = binaryX;
            binaryX = "";
            for(int i = 1; i <= dist; i++){
                binaryX += "0";
            }
            binaryX += temp;
        }
        int limit = (binaryX.Length > binaryY.Length) ? binaryY.Length : binaryX.Length;
        int counter = 0;
        
        for(int i = 0; i < limit; i++){
            
            if(binaryX[i] !=  binaryY[i]){
                counter++;
            }
        }
        
        return counter;
    }
}

//ex1
// 3 --> 0011
// 1 --> 0001

//ex2
// 1 --> 0001
// 4 --> 0100
