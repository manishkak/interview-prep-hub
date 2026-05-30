# tree Traversals

## Problem Statement

Describe the problem statement for **tree Traversals** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// treeTraversals

<! DOCTYPE html>
<html>
   <head>
      <script>
         class Node {
            constructor(value) {
               this.value = value;
               this.left = null;
               this.right = null;
            }
         }
         class BinarySearchTree {
            constructor() {
               this.root = null;
            }

            inserting(value) {
               let node = new Node(value);
               if(this.root == null) {
                  this.root = node;
               }else {
                  this.insertNode(this.root, node);
               }
            }

            insertNode(root, newNode) {
               if(newNode.value < root.value) {
                  if(root.left == null) {
                     root.left = newNode;
                  } else {
                     this.insertNode(root.left, newNode);
                  }
               } else if(newNode.value > root.value) {
                  if(root.right == null) {
                     root.right = newNode;
                  } else {
                     this.insertNode(root.right, newNode);
                  }
               }
            }
            getRootNode() {
               return this.root;
            }

            /* implementation of individual operations of traversal in tree */

            preorderTrav(root) {
               if(root != null) {
                  console.log(root.value); // Traverse the root node
                  this.preorderTrav(root.left); /* Traverse the left subtree */
                  this.preorderTrav(root.right); /* Traverse the right subtree */
               }
            }

            inorderTrav(root) {
               if(root != null) {
                  this.inorderTrav(root.left); /* Traverse the left subtree */
                  console.log(root.value); // Traverse the root node
                  this.inorderTrav(root.right); /* Traverse the right subtree */
               }
            }

            postorderTrav(root) {
               if(root != null) {
                  this.postorderTrav(root.left); /* Traverse the left subtree */
                  this.postorderTrav(root.right); /* Traverse the right subtree */
                  console.log(root.value); // Traverse the root node
               }
            }
         }
         
         var bst = new BinarySearchTree();
         bst.inserting(30);
         bst.inserting(50);
         bst.inserting(20);
         bst.inserting(14);
         bst.inserting(44);
         bst.inserting(34);
         bst.inserting(26);
         bst.inserting(10);
         bst.inserting(19);
         bst.inserting(54);
         
         var root = bst.getRootNode();
         document.write("preorder traversal of the binary tree is <br>");
         bst.preorderTrav(root);
         document.write('<br>');
         document.write('inorder traversal of the binary tree is <br>');
         bst.inorderTrav(root);
         document.write('<br>');
         document.write('Postorder traversal of the binary tree is <br>');
         bst.postorderTrav(root);
         document.write('<br>');
      </script>
   </head>
   <body>
   </body>
</html>
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
