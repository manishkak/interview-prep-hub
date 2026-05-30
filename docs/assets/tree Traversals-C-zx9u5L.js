const r=`# tree Traversals

## Problem Statement

Describe the problem statement for **tree Traversals** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// treeTraversals\r
\r
<! DOCTYPE html>\r
<html>\r
   <head>\r
      <script>\r
         class Node {\r
            constructor(value) {\r
               this.value = value;\r
               this.left = null;\r
               this.right = null;\r
            }\r
         }\r
         class BinarySearchTree {\r
            constructor() {\r
               this.root = null;\r
            }\r
\r
            inserting(value) {\r
               let node = new Node(value);\r
               if(this.root == null) {\r
                  this.root = node;\r
               }else {\r
                  this.insertNode(this.root, node);\r
               }\r
            }\r
\r
            insertNode(root, newNode) {\r
               if(newNode.value < root.value) {\r
                  if(root.left == null) {\r
                     root.left = newNode;\r
                  } else {\r
                     this.insertNode(root.left, newNode);\r
                  }\r
               } else if(newNode.value > root.value) {\r
                  if(root.right == null) {\r
                     root.right = newNode;\r
                  } else {\r
                     this.insertNode(root.right, newNode);\r
                  }\r
               }\r
            }\r
            getRootNode() {\r
               return this.root;\r
            }\r
\r
            /* implementation of individual operations of traversal in tree */\r
\r
            preorderTrav(root) {\r
               if(root != null) {\r
                  console.log(root.value); // Traverse the root node\r
                  this.preorderTrav(root.left); /* Traverse the left subtree */\r
                  this.preorderTrav(root.right); /* Traverse the right subtree */\r
               }\r
            }\r
\r
            inorderTrav(root) {\r
               if(root != null) {\r
                  this.inorderTrav(root.left); /* Traverse the left subtree */\r
                  console.log(root.value); // Traverse the root node\r
                  this.inorderTrav(root.right); /* Traverse the right subtree */\r
               }\r
            }\r
\r
            postorderTrav(root) {\r
               if(root != null) {\r
                  this.postorderTrav(root.left); /* Traverse the left subtree */\r
                  this.postorderTrav(root.right); /* Traverse the right subtree */\r
                  console.log(root.value); // Traverse the root node\r
               }\r
            }\r
         }\r
         \r
         var bst = new BinarySearchTree();\r
         bst.inserting(30);\r
         bst.inserting(50);\r
         bst.inserting(20);\r
         bst.inserting(14);\r
         bst.inserting(44);\r
         bst.inserting(34);\r
         bst.inserting(26);\r
         bst.inserting(10);\r
         bst.inserting(19);\r
         bst.inserting(54);\r
         \r
         var root = bst.getRootNode();\r
         document.write("preorder traversal of the binary tree is <br>");\r
         bst.preorderTrav(root);\r
         document.write('<br>');\r
         document.write('inorder traversal of the binary tree is <br>');\r
         bst.inorderTrav(root);\r
         document.write('<br>');\r
         document.write('Postorder traversal of the binary tree is <br>');\r
         bst.postorderTrav(root);\r
         document.write('<br>');\r
      <\/script>\r
   </head>\r
   <body>\r
   </body>\r
</html>
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};
