const BinaryTree = require('../lib/binarytree').BinaryTree;
const TreeNode = require('../lib/binarytree').TreeNode;
require('jest');

describe('Binary Tree testing', function() {
  describe('#Valid testing', function() {
    describe('#Tree traversal', function() {
      let one = new TreeNode(1);
      let two = new TreeNode(2);
      let three = new TreeNode(3);
      let four = new TreeNode(4);
      let five = new TreeNode(5);
      let six = new TreeNode(6);
      let seven = new TreeNode(7);
      let eight = new TreeNode(8);
      let nine = new TreeNode(9);
      
      let binaryTree = new BinaryTree();
      binaryTree.root = one;
      
      one.left = two;
      one.right = three;
      
      two.left = six;
      
      three.left = four;
      three.right = five;
      
      six.right = seven;
      
      seven.left = eight;
      seven.right = nine;

      it('Should return the tree in-order: [ 6, 8, 7, 9, 2, 1, 4, 3, 5]', () => {
        expect(binaryTree.inOrderTraversal()).toEqual([ 6, 8, 7, 9, 2, 1, 4, 3, 5 ]);
      });
      it('Should return the tree in-order (PRIVATE HELPER METHOD): [ 6, 8, 7, 9, 2, 1, 4, 3, 5]', () => {
        expect(binaryTree._inOrderTraversal(binaryTree.root, [])).toEqual([ 6, 8, 7, 9, 2, 1, 4, 3, 5 ]);
      });
      it('Should return the tree pre-order: [ 1, 2, 6, 7, 8, 9, 3, 4, 5]', () => {
        expect(binaryTree.preOrderTraversal()).toEqual([ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]);
      });
      it('Should return the tree pre-order (PRIVATE HELPER FUNCTION): [ 1, 2, 6, 7, 8, 9, 3, 4, 5]', () => {
        expect(binaryTree._preOrderTraversal(binaryTree.root, [])).toEqual([ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]);
      });
      it('Should return the tree post-order: [ 8, 9, 7, 6, 2, 4, 5, 3, 1]', () => {
        expect(binaryTree.postOrderTraversal()).toEqual([ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]);
      });
      it('Should return the tree post-order(PRIVATE HELPER FUNCTION): [ 8, 9, 7, 6, 2, 4, 5, 3, 1]', () => {
        expect(binaryTree._postOrderTraversal(binaryTree.root, [])).toEqual([ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]);
      });

      it('Should return null for an empty tree. (in-order)', () => {
        expect(new BinaryTree().inOrderTraversal()).toBeNull();
      });
      it('Should return null for an empty tree. (PRIVATE HELPER FUNCTION) (in-order)', () => {
        expect(new BinaryTree()._inOrderTraversal(new BinaryTree().root, [])).toBeNull();
      });
      it('Should return null for an empty tree. (pre-order)', () => {
        expect(new BinaryTree().preOrderTraversal()).toBeNull();
      });
      it('Should return null for an empty tree. (PRIVATE HELPER FUNCTION) (pre-order)', () => {
        expect(new BinaryTree().preOrderTraversal(new BinaryTree().root, [])).toBeNull();
      });
      it('Should return null for an empty tree. (post-order)', () => {
        expect(new BinaryTree().postOrderTraversal()).toBeNull();
      });
      it('Should return null for an empty tree. (PRIVATE HELPER FUNCTION) (post-order)', () => {
        expect(new BinaryTree().postOrderTraversal(new BinaryTree().root, [])).toBeNull();
      });

      let rootOnlyBinaryTree = new BinaryTree();
      rootOnlyBinaryTree.root = new TreeNode(1);

      it('Should return single node value. (in-order)', () => {
        expect(rootOnlyBinaryTree.inOrderTraversal()).toEqual([1]);
      });
      it('Should return single node value. (PRIVATE HELPER FUNCTION) (in-order)', () => {
        expect(rootOnlyBinaryTree._inOrderTraversal(rootOnlyBinaryTree.root, [])).toEqual([1]);
      });
      it('Should return single node value. (pre-order)', () => {
        expect(rootOnlyBinaryTree.preOrderTraversal()).toEqual([1]);
      });
      it('Should return single node value. (PRIVATE HELPER FUNCTION) (pre-order)', () => {
        expect(rootOnlyBinaryTree.preOrderTraversal(rootOnlyBinaryTree.root, [])).toEqual([1]);
      });
      it('Should return single node value. (post-order)', () => {
        expect(rootOnlyBinaryTree.postOrderTraversal()).toEqual([1]);
      });
      it('Should return single node value. (PRIVATE HELPER FUNCTION) (post-order)', () => {
        expect(rootOnlyBinaryTree.postOrderTraversal(rootOnlyBinaryTree.root, [])).toEqual([1]);
      });
    });
  });
});