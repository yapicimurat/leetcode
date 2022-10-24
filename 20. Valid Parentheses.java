class Solution {

    public boolean isValid(String s) {
        if(s.length() % 2 != 0) return false;
        boolean result = true;

        Stack<Character> stack = new Stack<Character>();
        
        for(int i = 0; i < s.length(); i++){
            Character current = s.charAt(i);
            if(current == '(' || current == '{' || current == '['){
                stack.push(current);
                continue;
            }
            else if(current == ')' || current == '}' || current == ']'){
                if(!stack.isEmpty()){
                    Character popped = stack.pop();
                    if((current == ')' && popped == '(') || (current == '}' && popped == '{') || (current == ']' && popped == '[')){
                        continue;
                    }else return false;
                }
                else
                    return false;
            }
        }
        
        if(!stack.isEmpty()) return false;

        return result;
    }

}
