class Solution {
    public String longestPalindrome(String s) {
        String longestPalindromic = "";
        String currentStr = "";
        
        for(int i = 0; i <= s.length() - 1; i++){
            if(s.length() - 1 - i < longestPalindromic.length()) break;
            for(int k = s.length() - 1; k >= i; k--){
                currentStr = s.substring(i, k + 1);
                if(isPalindromic(currentStr) && currentStr.length() > longestPalindromic.length()){
                    longestPalindromic = currentStr;
                }            
                currentStr = "";
            }
        }
        return longestPalindromic;
    }


    private boolean isPalindromic(String s){
        int limit = (s.length() % 2 == 0) ? s.length() / 2 : Integer.parseInt(Integer.toString(((Double)Math.floor(s.length() / 2)).intValue()));
        for(int i = 0; i <= limit; i++){
            if(s.charAt(i) != s.charAt(s.length() - i - 1)){
                return false;
            }
        }   
        return true;
    }
}
