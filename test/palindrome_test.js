'use strict';

import { ListNode } from '../lib/palindrome';
let expect = require('chai').expect;

describe('Palindrome tests', () => {
  it('should find if a 7 letter word is a palindrome', () => {
    expect(new ListNode()
      .insert('R')
      .insert('A')
      .insert('C')
      .insert('E')
      .insert('C')
      .insert('A')
      .insert('R')
      .isPalindrome()
    )
    .to.equal(true);
  });

  it('should find if a 6 letter word is a palindrome', () => {
    expect(new ListNode()
      .insert('p')
      .insert('u')
      .insert('l')
      .insert('l')
      .insert('u')
      .insert('p')
      .isPalindrome()
    )
    .to.equal(true);
  });

  it('should find if a 7 letter word is not a palindrome', () => {
    expect(new ListNode()
      .insert('R')
      .insert('A')
      .insert('C')
      .insert('E')
      .insert('B')
      .insert('A')
      .insert('R')
      .isPalindrome()
    )
    .to.equal(false);
  });

  it('should find if a 6 letter word is not a palindrome', () => {
    expect(new ListNode()
      .insert('p')
      .insert('u')
      .insert('s')
      .insert('h')
      .insert('u')
      .insert('p')
      .isPalindrome()
    )
    .to.equal(false);
  });

  it('should find one letter word is a palindrome', () => {
    expect(new ListNode()
      .insert('A')
      .isPalindrome()
    )
    .to.equal(true);
  });

  it('is not a palindrome when the list is empty', () => {
    expect(new ListNode()
      .isPalindrome()
    )
    .equals(false);
  });
});
