/**
 * Reads a CSV database asynchronously and logs student statistics
 * @param {string} path - Path to the CSV database file
 * @returns {Promise<void>}
 */
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    // Lecture asynchrone du fichier CSV
    const data = await fs.readFile(path, 'utf-8');

    // Découpe du fichier en lignes
    // trim() supprime les lignes vides au début et à la fin
    // filter enlève les lignes vides restantes
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);

    // On retire la première ligne (en-tête)
    const students = lines.slice(1);

    // Objet pour regrouper les étudiants par filière
    const fields = {};

    // Parcours de chaque étudiant
    students.forEach((line) => {
      // Découpage CSV
      const [firstname, , , field] = line.split(',');

      // Création du tableau pour la filière si nécessaire
      if (!fields[field]) {
        fields[field] = [];
      }

      // Ajout du prénom dans la filière correspondante
      fields[field].push(firstname);
    });

    // Affichage du nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // Affichage du détail par filière
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      }
    }
  } catch (error) {
    // Si le fichier n'existe pas ou est illisible
    throw new Error('Cannot load the database');
  }
};

// Export de la fonction
module.exports = countStudents;
