// Given a non-empty binary tree and target, find the closest node to target.

// Example 1:

// Input: [1,2,3], 4

//        1
//       / \
//      2   3

// Output: 3

// Example 2:

// Input: [10,9,20,null,null,15,7], 18

//    10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 20

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
  const root2 = new Node(10);
  const sn1 = new Node(9);
  const sn2 = new Node(20);
  const sn3 = new Node(15);
  const sn4 = new Node(27);
  
  // setup children
  root2.left = sn1;
  root2.right = sn2;
  sn2.left = sn3;
  sn2.right = sn4;

let goal;
let diff = Number.MAX_SAFE_INTEGER;
function findClosest (root, target) {
    if (!root) return;

    // if (root.val === target) return root.val;

// Input: [10,9,20,null,null,15], 18

//    10
//    / \
//   9  20
//     /  \
//    15  27 

// Output: 20

    if (Math.abs(root.val - target) < diff) {
        diff = Math.abs(root.val - target);
        goal = root.val;
    }

    if (root.val > target) {
        findClosest(root.left, target);
    } else {
        findClosest(root.right, target);
    }
    return goal;
}

console.log(findClosest(root2, 26))