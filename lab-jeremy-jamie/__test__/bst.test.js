const BST = require('../lib/bst').BST;
const TreeNode = require('../lib/bst').TreeNode;
require('jest');

describe('Binary Search Tree testing', function() {
  describe('#Valid testing', function() {
    let testBST = new BST();
    testBST.insert(new TreeNode(10));
    testBST.insert(new TreeNode(25));
    testBST.insert(new TreeNode(7));
    testBST.insert(new TreeNode(5));
    testBST.insert(new TreeNode(6));

    let _testBST = new BST();
    _testBST.root = new TreeNode(10); //nullcase is escaped in the insert method so we need to just set the root when its null
    _testBST._insert(_testBST.root, new TreeNode(25));
    _testBST._insert(_testBST.root, new TreeNode(7));
    _testBST._insert(_testBST.root, new TreeNode(5));
    _testBST._insert(_testBST.root, new TreeNode(6));

    describe('#insert test', function() {
      it('Should have a root of 10', () => {
        expect(testBST.root.value).toEqual(10);
      });
      it('Should have a root of 10 (ASSIGNED WITH PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST.root.value).toEqual(10);
      });
      it('Should have a left value of 7', () => {
        expect(testBST.root.left.value).toEqual(7);
      });
      it('Should have a left value of 7 (ASSIGNED WITH PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST.root.left.value).toEqual(7);
      });
      it('Should have a right node with a value of 25', () => {
        expect(testBST.root.right.value).toEqual(25);
      });
      it('Should have a right node with a value of 25 (ASSIGNED WITH PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST.root.right.value).toEqual(25);
      });
      it('node with value of 7 should have a left value of 5', () => {
        expect(testBST.root.left.left.value).toEqual(5);
      });
      it('node with value of 7 should have a left value of 5 (ASSIGNED WITH PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST.root.left.left.value).toEqual(5);
      });
      it('node with value of 5 should have a right value of 6', () => {
        expect(testBST.root.left.left.right.value).toEqual(6);
      });
      it('node with value of 5 should have a right value of 6 (ASSIGNED WITH PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST.root.left.left.right.value).toEqual(6);
      });
    });

    describe('#find test', function() {
      it('Should have a root of 10', () => {
        expect(testBST.find(10).value).toEqual(10);
      });
      it('Should have a root of 10 (USING FIND PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST._find(_testBST.root, 10).value).toEqual(10);
      });
      it('Should have return null for non-existent node', () => {
        expect(testBST.find(11)).toBeNull();
      });
      it('Should have return null for non-existent node (USING FIND PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST._find(_testBST.root, 11)).toBeNull();
      });
    });

    describe('#isBalanced test', function() {
      it('Should return false due to the tree being unbalanced', () => {
        expect(testBST.isBalanced()).toEqual(false);
      });
      it('Should return false due to the tree being unbalanced (USING PRIVATE HELPER FUNCTION)', () => {
        expect(_testBST._isBalanced(_testBST.root)).toEqual(false);
      });
      it('Should return true on an empty BST', () => {
        expect(new BST().isBalanced()).toEqual(true);
      });
      it('Should return true on an empty BST (USING PRIVATE HELPER FUNCTION)', () => {
        expect(new BST().isBalanced(new BST().root)).toEqual(true);
      });
    });

    describe('#remove test', function() {
      let removeTestBST = new BST();
      removeTestBST.insert(new TreeNode(10));

      let _removeTestBST = new BST();
      _removeTestBST.root = new TreeNode(10);

      it('Should return 10 for root', () => {
        expect(removeTestBST.root.value).toEqual(10);
      });
      it('Should return 10 for root (USING PRIVATE HELPER FUNCTION)', () => {
        expect(_removeTestBST.root.value).toEqual(10);
      });
      it('Should return a null root once removed', () => {
        removeTestBST.remove(10);
        expect(removeTestBST.root).toBeNull();
      });
      it('Should return a null root once removed (USING PRIVATE HELPER FUNCTION)', () => {
        _removeTestBST.root = _removeTestBST._removeNode(_removeTestBST.root, 10); // have to set manually since that is done in the remove function
        expect(_removeTestBST.root).toBeNull();
      });
    });
  });
});