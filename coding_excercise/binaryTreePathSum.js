function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}

// create nodes
const root = new Node(10);
const n1 = new Node(5);
const n2 = new Node(7);
const n3 = new Node(8);
const n4 = new Node(9);
const n5 = new Node(30);
const n6 = new Node(35);
const n7 = new Node(45);
// setup children
root.left = n2;
root.right = n6;
n2.left = n1;
n2.right = n4;
n4.left = n3;
n6.left = n5;
n6.right = n7;

/** 
                         10
                       /   \
                      7    35
                     / \  /  \
                    5  9  30  45
                       /
                      8
*/

var hasPathSum = function(root, sum) {
    if (root === null) return false;

    if (root.left === null && root.right === null && sum - root.val == 0) {
        return true;
    } else {
        return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
    }
};

console.log(hasPathSum(root, 22))
