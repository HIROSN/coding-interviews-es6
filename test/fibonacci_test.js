'use strict';

import { Fibonacci } from '../lib/fibonacci';
let expect = require('chai').expect;

describe('Fibonacci tests', () => {
  let createTests = function *() {
    yield {n: 0, fibonacci: 0};
    yield {n: 1, fibonacci: 1};
    yield {n: 2, fibonacci: 1};
    yield {n: 3, fibonacci: 2};
    yield {n: 4, fibonacci: 3};
    yield {n: 5, fibonacci: 5};
    yield {n: 6, fibonacci: 8};
    yield {n: 7, fibonacci: 13};
    yield {n: 8, fibonacci: 21};
    yield {n: 9, fibonacci: 34};
    yield {n: 10, fibonacci: 55};
    yield {n: 11, fibonacci: 89};
    yield {n: 12, fibonacci: 144};
    yield {n: 100, fibonacci: 354224848179262000000};
    yield {n: -1, fibonacci: undefined};
  };

  let fibonacci = new Fibonacci();
  let tests = createTests();

  it('should return correct Fibonacci numbers', () => {
    for (let test of tests) {
      expect(fibonacci.number(test.n)).to.equal(test.fibonacci);
    }
  });
});
