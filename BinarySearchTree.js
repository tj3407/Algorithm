function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// create nodes
var root = new Node("A");
var n1 = new Node("B");
var n2 = new Node("C");
var n3 = new Node("D");
var n4 = new Node("E");

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

function pre_order(root) {
  console.log(root.data);
  if (root && root.left) {
    pre_order(root.left);
  }
  if (root && root.right) {
    pre_order(root.right);
  }
}

pre_order(root); // => [ A, B, D, E, C ]

function in_order(root) {
  if (root && root.left) {
    in_order(root.left);
  }
  console.log(root.data);
  if (root && root.right) {
    in_order(root.right);
  }
}

in_order(root); // => [ D, B, E, A, C ]

function post_order(root) {
  if (root && root.left) {
    post_order(root.left);
  }
  if (root && root.right) {
    post_order(root.right);
  }
  console.log(root.data);
}

post_order(root); // => [ D, E, B, C, A ]
