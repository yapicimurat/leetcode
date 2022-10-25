class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) 
{
        
        String word1Joined = String.join("", word1);
        String word2Joined = String.join("", word2);

        if(word1Joined.equals(word2Joined)){
            return true;
        }


        return false;
    }
}
