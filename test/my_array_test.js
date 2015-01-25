'use strict';

import { MyArray } from '../lib/my_array';
let expect = require('chai').expect;

describe('Array.zip tests', () => {
  let combiner = (bookmark, boxart) => {
    return {
      time: bookmark.time,
      boxart: boxart.url
    };
  };

  let tests = function *() {
    yield {
      bookmarks: [
        {
          videoId: 65432445,
          time: 32432
        }
      ],
      boxarts: [
        {
          videoId: 65432445,
          width: 130,
          height:200,
          url:'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg'
        }
      ],
      combiner,
      result: '[{"time":32432,' +
        '"boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"}]'
    };

    yield {
      bookmarks: [
        {
          videoId: 65432445,
          time: 32432
        }
      ],
      boxarts: [],
      combiner,
      result: '[]'
    };
  };

  it('should return correct result', () => {
    for (let test of tests()) {
      expect(JSON.stringify(new MyArray().zip(
        test.combiner,
        test.bookmarks,
        test.boxarts)))
      .to.equal(test.result);
    }
  });
});
