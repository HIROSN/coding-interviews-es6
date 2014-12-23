// {"category": "Array", "notes": "Implement Array.zip"}

/*
  Implement Array.zip
*/

'use strict';

export class MyArray extends Array {
  zip(combiner, ...arrays) {
    let results = [];

    let min = arrays.reduce((previous, current) => {
      return Math.min(previous.length, current.length);
    });

    for (let i = 0; i < min; i++) {
      let args = arrays.map((array) => { return array[i]; });
      results.push(combiner.apply(this, args));
    }

    return results;
  }
}
