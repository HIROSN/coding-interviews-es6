'use strict';

import { movieLists } from '../lib/arrays_to_tree';
let expect = require('chai').expect;

describe('Movie lists tests', () => {
  let newRelease1;
  let newRelease2;
  let thriller1;
  let thriller2;

  it('should have 2 lists "New Releases" and "Thrillers"', () => {
    expect(Array.isArray(movieLists)).to.equal(true);
    expect(movieLists.length).to.equal(2);
    expect(movieLists[0]).to.be.a('object');
    expect(movieLists[0].name).to.equal('New Releases');
    expect(movieLists[1]).to.be.a('object');
    expect(movieLists[1].name).to.equal('Thrillers');
  });

  it ('should have 2 videos in each list', () => {
    expect(Array.isArray(movieLists[0].videos)).to.equal(true);
    expect(movieLists[0].videos.length).to.equal(2);
    newRelease1 = movieLists[0].videos[0];
    newRelease2 = movieLists[0].videos[1];
    expect(Array.isArray(movieLists[1].videos)).to.equal(true);
    expect(movieLists[1].videos.length).to.equal(2);
    thriller1 = movieLists[1].videos[0];
    thriller2 = movieLists[1].videos[1];
  });

  it ('should have correct id and title for each video', () => {
    expect(newRelease1.id).to.equal(65432445);
    expect(newRelease1.title).to.equal('The Chamber');
    expect(newRelease2.id).to.equal(675465);
    expect(newRelease2.title).to.equal('Fracture');
    expect(thriller1.id).to.equal(70111470);
    expect(thriller1.title).to.equal('Die Hard');
    expect(thriller2.id).to.equal(654356453);
    expect(thriller2.title).to.equal('Bad Boys');
  });

  it ('should have correct time and boxart for each video', () => {
    expect(newRelease1.time).to.equal(32432);
    expect(newRelease1.boxart).to.equal(
      'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg');
    expect(newRelease2.time).to.equal(3534543);
    expect(newRelease2.boxart).to.equal(
      'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg');
    expect(thriller1.time).to.equal(645243);
    expect(thriller1.boxart).to.equal(
      'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg');
    expect(thriller2.time).to.equal(984934);
    expect(thriller2.boxart).to.equal(
      'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg');
  });
});
