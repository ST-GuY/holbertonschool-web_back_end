import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // On lance les deux promesses en parallèle et on attend qu'elles se terminent (fulfilled ou rejected)
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName), // Promesse pour créer l'utilisateur
    uploadPhoto(fileName)            // Promesse pour uploader la photo
  ]);

  // On transforme le résultat de chaque promesse pour avoir un format uniforme
  return results.map(result => ({
    status: result.status, // 'fulfilled' si la promesse a réussi, 'rejected' sinon
    value: result.status === 'fulfilled' 
      ? result.value                    // Si succès, on garde la valeur originale
      : result.reason instanceof Error 
        ? result.reason.toString()      // Si échec et que c'est un objet Error, on le convertit en chaîne
        : result.reason                 // Sinon on garde la valeur telle quelle
  }));
}