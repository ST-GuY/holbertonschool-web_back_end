const fs = require('fs');

const countStudents = (database) => {
  return new Promise((resolve, reject) => {
    fs.readFile(database, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve();
      }
    });
  });
};

module.exports = countStudents;
