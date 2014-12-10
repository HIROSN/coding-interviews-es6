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
        result = number(n - 1) + number(n - 2);
        this.cache[n] = result;
      }
    }

    return result;
  }
}
