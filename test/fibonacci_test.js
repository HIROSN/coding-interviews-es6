'use strict';

import { Fibonacci } from '../lib/fibonacci';
let expect = require('chai').expect;

describe('Fibonacci tests', () => {
  let fibonacci = new Fibonacci();

  it('should be 0 when N = 0', () => {
    expect(fibonacci.number(0)).to.equal(0);
  });

  it('TODO');
});
