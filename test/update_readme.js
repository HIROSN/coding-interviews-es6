'use strict';

let fs = require('fs');
let expect = require('chai').expect;

describe('Update README.md', () => {
  it('should update README.md', (done) => {
    fs.open(__dirname + '/../README.md', 'a', (err, fd) => {
      expect(err).to.equal(null);
      let libPath = __dirname + '/../lib/';

      fs.readdir(libPath, (err, fileArray) => {
        let files = fileArray.values();
        const options = {encoding: 'utf8'};

        let appendToReadme = (file) => {
          if (file.done) {
            fs.close(fd);
            return done();
          }

          fs.readFile(libPath + file.value, options, (err, data) => {
            expect(err).to.equal(null);
            let match = data.match(/\{ *\"category\" *:.*, *\"notes\" *:.*\}/);
            expect(match).to.not.equal(null);
            let info = JSON.parse(match[0]);
            expect(info).to.not.equal(null);
            expect(info.category).to.not.equal(undefined);
            expect(info.notes).to.not.equal(undefined);

            let buffer = new Buffer('[' + file.value + '](lib/' + file.value +
              ') | ' + info.category + ' | ' + info.notes + '\n');

            fs.write(fd, buffer, 0, buffer.length, null, (err) => {
              expect(err).to.equal(null);
              appendToReadme(files.next());
            });
          });
        };

        appendToReadme(files.next());
      });
    });
  });
});
