# General information
_Author_: Jeremy Pearson and Jamie Williams

_Version_: 1.0.0

_Libraries_: jest

_Last modified_: 3/3/2018

# App use

## Installing

Install with the following command: 
```
const BinaryTree = require('./lib/binarytree.js').BinaryTree; // imports BinaryTree Class and methods
const BST = require('./lib/bst.js').BST; // imports BST Class and methods

// Use treenode from one of the following libraries
const TreeNode = require('./lib/bst.js').TreeNode; // import TreeNode class from BST library
const TreeNode = require('./lib/binarytree.js').TreeNode; // import TreeNode class from BST library
```

## Accessing methods

Use the following commands to access the Binary Search Tree and Binary Tree library methods:
```
BST.insert(TreeNode) = [undefined] // returns nothing, but alters the tree being operated on by inserting a TreeNode
BST.find(value) = [node with found value or null] // Returns a node with the value searched for or null if not found
BST.remove(value) = [undefined] // Returns nothing, but alters the tree being operated on by removing a TreeNode
BST.isBalanced() = [true or false] // Return true of false base on if the tree is balanced or not.
BinaryTree.preOrderTraversal() = // Prints out the binary tree in pre-order orientation (ROOT LEFT RRIGHT)
BinaryTree.postOrderTraversal() = // Prints out the binary tree in post-order orientation (LEFT RIGHT ROOT)
BinaryTree.inOrderTraversal() = // Prints out the binary tree in in-order orientation (LEFT ROOT RIGHT)
```

Helper functions are all labeled with an _ preceeding the function name. I will not display them, but please do not use them unless you're implementing features for other functions.

## Running tests

Simply use the following command in your terminal once you have jest installed:
```
npm run test
```

# Lab Readme (SPECS)

![cf](http://i.imgur.com/7v5ASc8.png) lab 35 - Binary Trees and Binary Search Trees
====

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements
#### Configuration
  <!-- list of files, configurations, tools, etc that are required -->
  your lab directory must include
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing
  * write at least three test assertions for each constructor method
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks
* Add a `remove(value)` member function to the `BinarySearchTree` class presented in class. 
* Add a `preOrderTraversal` and a `postOrderTraversal` member functions to the `BinaryTree` class presented in class.
* Add a `isBalanced` method to the `BinarySearchTree` class presented in class.
#### Rubric:
  * Tests: 3pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Big-O notation: 3pts