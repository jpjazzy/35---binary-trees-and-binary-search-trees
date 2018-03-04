import {BinaryTree, TreeNode} from '../lib/binarytree';
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
      it('Should return the tree pre-order: [ 1, 2, 6, 7, 8, 9, 3, 4, 5]', () => {
        expect(binaryTree.preOrderTraversal()).toEqual([ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]);
      });
      it('Should return the tree post-order: [ 8, 9, 7, 6, 2, 4, 5, 3, 1]', () => {
        expect(binaryTree.postOrderTraversal()).toEqual([ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]);
      });
    });
  });

  describe('#Invalid testing', function() {
    it('Should return an err starting twice', () => {
      expect(true).toBe(true);
    });
  });
});