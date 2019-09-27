function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}

// create nodes
const root = new Node(1);
const n1 = new Node(2);
const n2 = new Node(3);

// setup children
root.left = n1;
root.right = n2;

const maxPathSum = function(root) {
    if (root === null) return 0;
    let result = Number.MIN_SAFE_INTEGER
    
    function recursion(node) {
        if (node === null) return 0;
        
        let left = recursion(node.left);
        let right = recursion(node.right);
        let maxValue = Math.max(Math.max(left, right) + node.val, node.val);
        let maxTop = Math.max(maxValue, left + right + node.val);
        result = Math.max(maxTop, result);
        
        return maxValue;
    }
    recursion(root);
    return result;
};

console.log(maxPathSum(root)); // expected result: 6