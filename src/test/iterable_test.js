'use strict';

import makeIterable from '../lib/iterable.js';
let expect = require('chai').expect;

describe('Iterable object tests', () => {
  it('works with array destructuring', () => {
    let iterable = makeIterable({
      str: 'foo',
      num: 123,
      ary: ['foo', 123],
      obj: {foo: 123},
      func: function() {}
    });

    let [str, num, ary, obj, func] = [...iterable];
    expect(str).to.equal('foo');
    expect(num).to.equal(123);
    expect(Array.isArray(ary)).to.equal(true);
    expect(obj).to.be.a('object');
    expect(func).to.be.a('function');
  });
});
