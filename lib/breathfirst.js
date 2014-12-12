// {"category": "Tree", "notes": "Breath-first traversal"}

/*
  Breath-first binary tree traversal

           [10]
          /    \
       [4]      [16]
       / \      /  \
     [2] [8]  [12] [18]
         /      \     \
       [6]      [14]  [20]
                         \
                         [24]
                         /
                      [22]

  Breath-first traversal sequence: 10, 4, 16, 2, 8, 12, 18, 6, 14, 20, 24, 22

  Expected output:
  10
  4, 16
  2, 8, 12, 18
  6, 14, 20
  24
  22
*/

'use strict';

export class BinaryTreeNode {
  constructor(element, left = null, right = null) {
    this.element = element;
    this.left = left;
    this.right = right;
  }

  printBreathFirst() {
    let output = '';
    let node = this;
    let level = 0;
    let queue = [{node, level}];

    while (queue.length) {
      let front = queue.shift();
      output += front.level > level ? '\n' : output ? ', ' : '';
      output += front.node.element;
      level = front.level;

      if (front.node.left) {
        queue.push({
          node: front.node.left,
          level: level + 1
        });
      }

      if (front.node.right) {
        queue.push({
          node: front.node.right,
          level: level + 1
        });
      }
    }

    return output + '\n';
  }

  add(element) {
    if (element < this.element) {
      if (this.left) {
        this.left.add(element);
      }
      else {
        this.left = new BinaryTreeNode(element);
      }
    }

    if (element > this.element) {
      if (this.right) {
        this.right.add(element);
      }
      else {
        this.right = new BinaryTreeNode(element);
      }
    }

    return this;
  }
}
