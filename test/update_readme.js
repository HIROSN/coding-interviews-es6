'use strict';

let fs = require('fs');
let expect = require('chai').expect;
let async = require('async');

const libPath = __dirname + '/../lib/';
const readMePath = __dirname + '/../README.md';
const options = {encoding: 'utf8'};

describe('Update README.md', () => {
  it('should update README.md', (done) => {
    new Promise((resolve) => {
      fs.open(readMePath, 'a', (err, fd) => {
        expect(err).to.equal(null);
        resolve(fd);
      });
    })
    .then((fd) => {
      return new Promise((resolve) => {
        fs.readdir(libPath, (err, files) => {
          expect(err).to.equal(null);
          resolve({fd, files});
        });
      });
    })
    .then((results) => {
      let {fd, files} = results;
      async.eachSeries(files, (file, callback) => {
        new Promise((resolve) => {
          fs.readFile(libPath + file, options, (err, data) => {
            if (err) { return callback(err); }
            let match = data.match(/\{ *\"category\" *:.*, *\"notes\" *:.*\}/);
            let info = match && JSON.parse(match[0]);

            if (!info || !info.category || !info.notes) {
              return callback('add category and notes');
            }

            resolve(new Buffer('[' + file + '](lib/' + file +
              ') | ' + info.category + ' | ' + info.notes + '\n'));
          });
        })
        .then((buffer) => {
          fs.write(fd, buffer, 0, buffer.length, null, (err) => {
            expect(err).to.equal(null);
            callback();
          });
        });
      }, (err) => {
        fs.close(fd);
        expect(err).to.equal(undefined);
        done();
      });
    });
  });
});
