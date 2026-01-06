const fs = require('fs');

const countStudents = (database) => {
  let csv;
  try {
    csv = fs.readFileSync(database, { encoding: 'utf-8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = csv.split('\n');
  const linesWithoutHeader = lines.slice(1);
  const validLines = linesWithoutHeader.filter((line) => line.trim() !== '');
  console.log(`Number of students: ${validLines.length}`);

  const fields = {};
  validLines.forEach((line) => {
    const columns = line.split(',');
    const firstName = columns[0];
    const field = columns[3];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstName);
  });

  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      const listNames = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${listNames}`);
    }
  }
};

module.exports = countStudents;
