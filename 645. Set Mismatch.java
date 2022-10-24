class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] result = new int[]{ -1, -1 };
        int sumOfArr = Arrays.stream(nums).sum();

        for(int i = 0; i < nums.length - 1; i++){

            for(int j = i + 1; j < nums.length; j++){
                /*
                    (n*(n + 1)) / 2
                    1....5 => (5*(6)) / 2 => 15 true
                */
                if(nums[i] == nums[j]){
                    int calc = (nums.length * (nums.length + 1)) / 2;
                    result[0] = nums[i];
                    result[1] = nums[i] + (calc - sumOfArr);
                    return result;
                }
            }
        }
        return result;
    }
}
