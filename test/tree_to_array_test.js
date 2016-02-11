'use strict';

import { videos } from '../lib/tree_to_array.js';
let expect = require('chai').expect;

describe('Videos tests', () => {
  it('should have correct list of videos', () => {
    expect(JSON.stringify(videos)).to.equal(
      '[' +
        '{' +
          '"id":70111470,' +
          '"title":"Die Hard",' +
          '"time":323133,' +
          '"url":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"' +
        '},' +
        '{' +
          '"id":654356453,' +
          '"title":"Bad Boys",' +
          '"time":6575665,' +
          '"url":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"' +
        '},' +
        '{' +
          '"id":65432445,' +
          '"title":"The Chamber",' +
          '"time":3452343,' +
          '"url":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"' +
        '},' +
        '{' +
          '"id":675465,' +
          '"title":"Fracture",' +
          '"time":3453434,' +
          '"url":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"' +
        '}' +
      ']'
    );
  });
});
