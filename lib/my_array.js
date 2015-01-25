// {"category": "Array", "notes": "Implement Array.concatAll and zip"}

/*
  Implement Array.concatAll and zip
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

Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};
