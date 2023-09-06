class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(char c: s.toCharArray()) {
            if(c == '(' || c == '{' || c == '[') {
                stack.push(c);
            }else {
                if(stack.empty()) return false;
                if(c == ')' && stack.pop() != '(') return false;
                if(c == '}' && stack.pop() != '{') return false;
                if(c == ']' && stack.pop() != '[') return false;
                continue;
            }
        }

        return stack.empty();
    }
}
