class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {

        for(int i = 0; i < nums.length - 1; i++){
            
            int max = (i + k > nums.length - 1) ? nums.length - 1 : i + k;

            for(int j = i + 1; j <= max; j++){
                if(nums[i] == nums[j]){
                    return true;
                }
            }


        }

        return false;
    }
}
