// Affiche un message dans le terminal sans ajouter automatiquement un retour à la ligne
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Définit l'encodage des données reçues depuis l'entrée standard en UTF-8
process.stdin.setEncoding('utf8');

// Écoute l'événement "data" déclenché quand l'utilisateur saisit quelque chose
process.stdin.on('data', (data) => {
  // Affiche le nom saisi par l'utilisateur après avoir supprimé les espaces et retours à la ligne
  process.stdout.write(`Your name is: ${data.trim()}\n`);
});

// Écoute l'événement "end" déclenché quand l'entrée standard est fermée (Ctrl+D)
process.stdin.on('end', () => {
  // Affiche un message indiquant que le programme va se fermer
  process.stdout.write('This important software is now closing\n', () => {
    // Termine proprement le processus Node.js avec un code de sortie 0 (succès)
    process.exit(0);
  });
});
