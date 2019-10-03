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

      //       10
      //       /  \
      //     7    35
      //   /  \  /  \
      // 5    9  30   45
      //     /
      //    8   
          

// BST INORDER SUCCESSOR:

function findMin(node) {
  if (node === null) return;
  let minNode = node;
  while (node.left !== null) {
    minNode = node.left;
  }
  return minNode;
}

function find(node, value) {
  if (node === null) return;
  if (node.val === value) {
    return node;
  } else if (node.val < value) {
    return find(node.right, value);
  } else {
    return find(node.left, value);
  }
}

function getSuccessor(root, value) {
  let current = find(root, value);
  if (current.val === null) return;

  if (current.right !== null) {
    return findMin(current.right);
  } else {
    let successor = null;
    let ancestor = root;

      //       10
      //       /  \
      //     7    35
      //   /  \  /  \
      // 5    9  30   45
      //  \  /
      //   6 8   
    while (ancestor !== current) {
      if (current.val < ancestor.val) {
        successor = ancestor;
        ancestor = ancestor.left;
      } else {
        ancestor = ancestor.right;
      }
    }
    return successor.val;
  }
}

console.log(getSuccessor(root, 9))