export default function guardrail(mathFunction) {
  // On crée le tableau qui va contenir les résultats
  const queue = [];

  try {
    // On exécute la fonction passée en argument
    const result = mathFunction();

    // Si tout se passe bien, on ajoute le résultat au tableau
    queue.push(result);

  } catch (error) {
    // Si une erreur est lancée, on ajoute le message de l’erreur
    queue.push(`Error: ${error.message}`);

  } finally {
    // Dans TOUS les cas (succès ou erreur),
    // on ajoute ce message à la fin du tableau
    queue.push('Guardrail was processed');
  }

  // On retourne le tableau final
  return queue;
}
