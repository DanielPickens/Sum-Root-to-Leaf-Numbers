var sumNumbers = function(root) {
    return dfs(root, 0);
}

var dfs = function( node, path) {
    if (node == null) {
        return 0;
    }
    path = path*10 + node.val;
    if (node.left == null && node.right == null) {
        return path;
    }
    return dfs(node.left, path) + dfs(node.right, path);
}
 


/*
Success
Details 
Runtime: 68 ms, faster than 95.39% of JavaScript online submissions for Sum Root to Leaf Numbers.
Memory Usage: 40.2 MB, less than 30.44% of JavaScript online submissions for Sum Root to Leaf Numbers.
*/
