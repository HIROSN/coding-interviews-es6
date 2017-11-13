// {"category": "Iterator", "notes": "Make an iterable object"}

/*
  Make an iterable object.
*/

'use strict';

export default (obj) => {
  let iterable = Object.assign({}, obj);

  iterable[Symbol.iterator] = function *() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  };

  return iterable;
};
