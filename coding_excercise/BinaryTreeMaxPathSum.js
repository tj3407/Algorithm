// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in ///// the tree along the parent-child connections. The path must contain at least one node and does not need // to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6

// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

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

// create nodes
const root2 = new Node(-10);
const sn1 = new Node(9);
const sn2 = new Node(20);
const sn3 = new Node(15);
const sn4 = new Node(7);

// setup children
root2.left = sn1;
root2.right = sn2;
sn2.left = sn3;
sn2.right = sn4;

const maxPathSum = function(root) {
  if (root === null) return 0;
  let result = Number.MIN_SAFE_INTEGER;
  recursion(root);
  function recursion(node) {
    if (node === null) return 0;

    let left = recursion(node.left);
    let right = recursion(node.right);
    // console.log(left, right)
    result = Math.max(result, left+right+node.val);
    return Math.max(left, right) + node.val
  }

  return result;
};

// console.log(maxPathSum(root)); // expected result: 6
console.log(maxPathSum(root2)); // expected result: 42

