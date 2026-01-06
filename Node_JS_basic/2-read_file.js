const fs = require('fs');

const countStudents = (database) => {
    let csv;
    try {
        csv = fs.readFileSync(database, { encoding: 'utf-8' });
    } catch {
        throw new Error('Cannot load the database');
    }

    // Découper en lignes et supprimer l'en-tête
    const lignes = csv.split('\n');
    const lignes_sans_entete = lignes.slice(1);

    // Filtrer les lignes vides
    const lignes_valides = lignes_sans_entete.filter((ligne) => ligne.trim() !== '');

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${lignes_valides.length}`);

    // Regrouper les étudiants par filière
    const filieres = {};
    lignes_valides.forEach((ligne) => {
        const colonnes = ligne.split(',');
        const first_name = colonnes[0];
        const filiere = colonnes[3];

        if (!filieres[filiere]) {
            filieres[filiere] = [];
        }
        filieres[filiere].push(first_name);
    });

    // Afficher le nombre d'étudiants et la liste pour chaque filière
    for (const filiere in filieres) {
        const listePrenoms = filieres[filiere].join(', ');
        console.log(`Number of students in ${filiere}: ${filieres[filiere].length}. List: ${listePrenoms}`);
    }
};

module.exports = countStudents;
