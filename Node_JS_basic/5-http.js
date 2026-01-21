const http = require('http');
const fs = require('fs').promises;

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
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const result = await countStudents(database);
      res.end(result);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
