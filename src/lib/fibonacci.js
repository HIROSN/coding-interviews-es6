// {"category": "DP", "notes": "Fibonacci number"}

/*
  Given a number n, please find the n-th element in Fibonacci sequence.
*/

'use strict';

export class Fibonacci {
  constructor() {
    this.cache = [0, 1];
  }

  number(n) {
    let result;

    if (n >= 0) {
      result = this.cache[n];

      if (typeof result !== 'number') {
        result = this.number(n - 1) + this.number(n - 2);
        this.cache[n] = result;
      }
    }

    return result;
  }
}
