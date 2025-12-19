import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Promise.allSettled permet d’attendre que TOUTES les Promises soient terminées
  // (qu’elles soient résolues ou rejetées)
  return Promise.allSettled([
    // Promise 1 : inscription de l’utilisateur (toujours résolue)
    signUpUser(firstName, lastName),

    // Promise 2 : upload de la photo (toujours rejetée dans cet exercice)
    uploadPhoto(fileName),
  ]).then((results) =>
    // On transforme le résultat pour respecter le format demandé
    results.map((result) => ({
      // Le statut : "fulfilled" ou "rejected"
      status: result.status,

      // Si la Promise est résolue → on prend result.value
      // Si la Promise est rejetée → on prend result.reason (l’erreur)
      value:
        result.status === 'fulfilled'
          ? result.value
          : result.reason,
    }))
  );
}