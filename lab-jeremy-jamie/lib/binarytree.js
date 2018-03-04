'use strict';

class TreeNode {
  constructor(value,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root=null){
    this.root = root;
  }

  inOrderTraversal(){
    if(!this.root)
      return null;
    return this._inOrderTraversal(this.root, []);
  }

  _inOrderTraversal(root, resultArr){
    // vinicio - this is a base case
    if(root === null)
      return null;

    let result = resultArr;
    // visit left
    this._inOrderTraversal(root.left, result);
    // visit root
    // console.log(`Visiting ${root.value}`);
    result.push(root.value);
    // visit right
    this._inOrderTraversal(root.right, result);

    return result;
  }

  preOrderTraversal(){
    if(!this.root)
      return null;
    return this._preOrderTraversal(this.root, []);
  }

  _preOrderTraversal(root, resultArr){
    // vinicio - this is a base case
    if(root === null)
      return null;

    let result = resultArr;
    // visit root
    // console.log(`Visiting ${root.value}`);
    result.push(root.value);
    // visit left
    this._preOrderTraversal(root.left, result);
    // visit right
    this._preOrderTraversal(root.right, result);

    return result;
  }

  postOrderTraversal(){
    if(!this.root)
      return null;
    return this._postOrderTraversal(this.root, []);
  }

  _postOrderTraversal(root, resultArr){
    // vinicio - this is a base case
    if(root === null)
      return null;

    let result = resultArr;

    // visit left
    this._postOrderTraversal(root.left, result);
    // visit right
    this._postOrderTraversal(root.right, result);
    // visit root
    // console.log(`Visiting ${root.value}`);
    result.push(root.value);

    return result;
  }

}

export {BinaryTree, TreeNode};