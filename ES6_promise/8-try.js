export default function divideFunction(numerator, denominator) {

  // On vérifie si le dénominateur est égal à 0
  // (diviser par 0 est impossible)
  if (denominator === 0) {

    // On arrête l’exécution et on lance une erreur
    throw new Error('cannot divide by 0');

  } else {

    // Si tout est correct, on retourne le résultat de la division
    return numerator / denominator;
  }
}