var isSymmetric = function(root) {
    if(root == null){
        return true;
    }
    return isSym(root.left,root.right)
};
function isSym(left,right){
    if(left == null && right == null) {
        return true;
    }
    if(left == null || right == null){
        return false;
    }
    if(left.val != right.val){
        return false;
    }
    return arguments.callee(left.left,right.right) && arguments.callee(left.right,right.left);
}