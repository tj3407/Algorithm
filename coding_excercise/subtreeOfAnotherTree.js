function Node(data) {
  this.val = data;
  this.left = null;
  this.right = null;
}

// create nodes
const root1 = null;

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

// create nodes
const root2 = new Node(35);
root2.left = new Node(30);
root2.right = new Node(45);

// create nodes
const root3 = new Node(12);
root3.right = new Node(5);
root3.left = new Node(7);

/** 
                           10
                         /   \
                        7    35
                       / \  /  \
                      5  9  30  45
                         /
                        8
  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
    if (!t && !s) return true;
    if (!s || !t) return false;
    let tree1 = [];
    let tree2 = [];

    buildString(s, tree1);
    buildString(t, tree2);

    const string1 = (tree1).join('');
    const string2 = (tree2).join('');

    return string1.indexOf(string2) !== -1;
};

const buildString = (node, tree) => {
    if (!node) {
        tree.push('x');
        return;
    }

    tree.push('v' + node.val.toString());
    buildString(node.left, tree);
    buildString(node.right, tree);
}

console.log(isSubtree(root, root3))
console.log(isSubtree(root, root2))
console.log(isSubtree(root1, root2))
console.log(isSubtree(root, root1))
