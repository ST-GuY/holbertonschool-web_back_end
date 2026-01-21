const express = require('express');
const fs = require('fs').promises;

const app = express();
const database = process.argv[2];

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);

    const students = lines.slice(1);

    const fields = {};

    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    let output = `Number of students: ${students.length}\n`;

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text');
  res.write('This is the list of our students\n');

  try {
    const result = await countStudents(database);
    res.end(result);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(1245);

module.exports = app;
