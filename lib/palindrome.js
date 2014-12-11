// {"category": "Algorithm", "notes": "Check if a linked list is palindrome"}

/*
  Implement a function to check if a linked list is a palindrome.
*/

'use strict';

export class ListNode {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }

  isPalindrome() {
    if (this.next) {
      let result = {
        isPalindrome: null,
        node: this.next
      };

      this.next.isPalindromeRecursive(result);
      return result.isPalindrome;
    }

    return false;
  }

  isPalindromeRecursive(result) {
    if (this.next) {
      this.next.isPalindromeRecursive(result);

      if (result.isPalindrome !== null) {
        return;
      }

      result.node = result.node.next;
    }

    if (result.node === this) {
      result.isPalindrome = true;
      return;
    }

    if (result.node.element !== this.element) {
      result.isPalindrome = false;
      return;
    }

    if (result.node.next === this) {
      result.isPalindrome = true;
    }
  }

  insert(element, after) {
    let found = this.find(after);
    let node = new ListNode(element, found.next);
    found.next = node;
    return this;
  }

  find(element) {
    let node = this;

    while (node && node.element != element) {
      node = node.next;
    }

    return node;
  }
}
