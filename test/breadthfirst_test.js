'use strict';

import { BinaryTreeNode } from '../lib/breadthfirst.js';
let expect = require('chai').expect;

describe('Breadth-first traversal tests', () => {
  let treeNode;
  beforeEach(() => { treeNode = new BinaryTreeNode(10); });

  it('should print in breadth-first traversal sequence', () => {
    expect(treeNode //(10)
      .add(4)
      .add(2)
      .add(8)
      .add(6)
      .add(16)
      .add(12)
      .add(18)
      .add(14)
      .add(20)
      .add(24)
      .add(22)
      .printBreadthFirst()
    )
    .to.equal(
      '10\n' +
      '4, 16\n' +
      '2, 8, 12, 18\n' +
      '6, 14, 20\n' +
      '24\n' +
      '22\n'
    );
  });

  it('should print root node element when the tree has no sub tree', () => {
    expect(treeNode.printBreadthFirst()).to.equal('10\n');
  });
});
